import { toast } from 'react-toastify';
import craetePost, { TCreatPost } from './api';
import { useMutation } from '@tanstack/react-query';

export const useCreatePostMutation = () => {
  return useMutation({
    mutationFn: (data: TCreatPost) => craetePost(data),
    onSuccess: () => {
      toast.success('Successfully created an post.')
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    },
    onError: () => toast.error('An Error has occured.')
  })
}

