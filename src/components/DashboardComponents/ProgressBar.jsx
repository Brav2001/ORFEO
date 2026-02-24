import { useStore } from "../../utils/store";

const ProgressBar = () => {
  const [loading, loadingValue, loadingItem] = useStore((state) => [
    state.loading,
    state.loadingValue,
    state.loadingItem,
  ]);
  return (
    <div className={`${!loading && "hidden"}`}>
      <div className="fixed top-0 z-50 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="fixed top-0 right-0 bottom-0  z-50 left-0 flex flex-col items-center justify-center">
        <div className="bg-white w-2/3 p-4 rounded-2xl">
          <div className="flex justify-between mb-1 w-full">
            <span className="text-base font-medium text-primary font-bold">
              {loadingItem}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 ">
            <div
              className="bg-primary h-2.5 rounded-full"
              style={{ width: loadingValue + "%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
