/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const IssueSchema = new mongoose.Schema({
  title: String,
  description: String,
  imgUrl: String,
  isFixed: Boolean,
  dateAdded: { type: Date, default: Date.now },
  dateMarkedFixed: { type: Date },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], required: true },
  },
});

IssueSchema.index({ location: '2dsphere' });

// Compiles the schema into a model, opening (or creating, if
//  nonexistent) the 'Issue' collection in the MongoDB database
export default mongoose.model('Issue', IssueSchema);

