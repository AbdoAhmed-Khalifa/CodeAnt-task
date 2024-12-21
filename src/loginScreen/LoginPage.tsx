import LoginForm from './LoginForm';
import Statistics from './Statistics';

const LoginPage = () => {
  return (
    <div className="h-screen grid xl:grid-cols-2 grid-cols-1 mx-auto bg-gray-50 items-center">
      <section className="bg-white h-screen xl:flex justify-center hidden ">
        <Statistics />
      </section>
      <section className="flex flex-col items-center justify-center gap-7">
        <LoginForm />
        <p>
          By signing up you agree to the{' '}
          <span className="font-semibold">Privacy Policy.</span>
        </p>
      </section>
    </div>
  );
};
export default LoginPage;
