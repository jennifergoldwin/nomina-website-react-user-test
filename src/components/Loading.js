import loading from "../assets/Spinner-1s-800px.gif";

const Loading = () => {
  // const styles = StyleSheet.create({ container: { display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', }, logo: { width: 220, height: 300, marginTop: -50, }, });
  return (
    <view
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1",
      }}
    >
      <img width={200} height="auto" src={loading} alt="" />
    </view>
  );
};

export default Loading;
