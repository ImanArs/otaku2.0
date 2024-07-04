import { useState } from 'react';
import s from './register.module.scss';
import { Button } from '@/shared/ui/Button';
import X from '@/public/assets/icons/x.svg';
import useAuthentication from '@/hook/useAuthentication';
import {motion} from 'framer-motion';

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<Props> = ({ showModal, setShowModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authenticate, error, isLoading } = useAuthentication();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await authenticate(email, password);
    if (!error) {
      closeModal();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {showModal && (
        <div className={s.modal}>
          <div className={s.modalContent}>
            <span className={s.close} onClick={closeModal}><X /></span>
            <div className={s.text}>Вход</div>
            <form className={s.register} onSubmit={handleSubmit}>
              <div className={s.box}>
                <input
                  type="email"
                  id="email"
                  placeholder="Ваш email..."
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className={s.box}>
                <input
                  type="password"
                  id="password"
                  placeholder="Пароль..."
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              {error && <div className={s.error}>{error}</div>}
              <div className={s.actions}>
                <Button type="black" >Войти</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Login;
