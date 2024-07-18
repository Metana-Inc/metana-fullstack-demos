function ExamplePrivatePage() {
  return (
    <div>
      <h2 className="text-2xl my-12 font-semibold">Example Private Page</h2>
      <p>
        This is an example private page. It should get some data from a private
        API endpoint using the auth token, if we're logged in.
      </p>
      <p>
        You can see the actions of the API call inside the developer JS console
        and network tab.
      </p>
    </div>
  );
}

export default ExamplePrivatePage;
