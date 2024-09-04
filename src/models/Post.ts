import { Schema, model, models } from 'mongoose';

// const UserSchema = new Schema

const PostSchema = new Schema({
  creator: {
    type: new Schema({
      _id: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: false, 
      }
    }),
    required: true
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