import { Schema, model, models } from 'mongoose';

export const PostSchema = new Schema({
  creator: [{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }],
  postHeading: {
    type: String,
    required: [true, 'heading is required.'],
  },
  postContent: {
    type: String,
    required: [true, 'Description is required.'],
  }
}, { timestamps: true });

const   Post = models.Post || model('Post', PostSchema);

export default Post;