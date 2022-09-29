import { useNavigate } from 'react-router-dom';
import useAuth from './useAuths';

function useProfileRedirect() {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user) {
    navigate('/profile');
  }
}

export default useProfileRedirect;
