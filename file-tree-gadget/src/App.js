function App() {
  return (
    <div>
      <Folder name="Desktop" is_open={true}>
        <Folder name="Music">
          <File name="song.mp4" />
          <File name="jam.mp4" />
        </Folder>
        <File name="Cat.jpg" />
        <File name="Dog.png" />
      </Folder>
      <Folder name="Applications" />
    </div>
  );
}

const Folder = (props) => {
  return (
    <div style={{ border: "2px solid pink" }}>
      <h1>{props.name}</h1>
      <div style={{ marginLeft: "17px" }}>
        <h3>{props.children}</h3>
        {props.isOpen ? props.children : null}
      </div>
    </div>
  );
};
export default App;

const File = (props) => {
  return <div>{props.name}</div>;
};
