import React, {Suspense} from "react";
const RemoteApp1 = React.lazy(() => import("app1/App"));
const RemoteApp2 = React.lazy(() => import("app2/App"));

const App = () => {
  return (
    <div>
      <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"yellow"
      }}>
        <h1>Main App include all Apps</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <RemoteApp1 />
      </Suspense>
      <Suspense fallback={"loading..."}>
        <RemoteApp2 />
      </Suspense>
    </div>)
}


export default App;
