import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },  
  postHeading: {
    type: String,
    required: [true, 'heading is required.'],
  },
  postContent: {
    type: String,
    required: [true, 'Description is required.'],
  }
});

const Post = models.Post || model('Post', PostSchema);

export default Post;