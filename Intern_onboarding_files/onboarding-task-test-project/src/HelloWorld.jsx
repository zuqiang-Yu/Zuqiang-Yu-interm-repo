/* eslint-disable react/prop-types */
function HelloWorld({ name }) {
  return (
    <div className="flex flex-col items-center gap-2 p-8">
      <h1 className="text-2xl font-bold">Hello, Focus Bear!</h1>
      <p className="text-lg text-gray-600">Welcome, {name}!</p>
    </div>
  );
}

export default HelloWorld;
