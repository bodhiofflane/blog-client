import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type RedirectIfAuth = {
  isUserAuth: boolean;
  children: React.ReactNode;
};

/*
  Из за этого комонента, пришлось изменить RegistrationForm.
  Вообще делал что бы редиректило оттуда, но этот редирект срабатывает раньше
*/

const RedirectIfAuth = ({ isUserAuth, children }: RedirectIfAuth) => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToPath = location.state && location.state.from  || '/'

  // Вообщем лучше чем вот так сделать пока не получается.
  useEffect(() => {
    if (isUserAuth) {
      //toast('Вы уже аворизованы'); // Сообщение пишу в самим компонентах
      navigate(goToPath, {replace: true});
    }
  }, [isUserAuth, navigate, goToPath]);

  return <>{children}</>;
};

export default RedirectIfAuth;
