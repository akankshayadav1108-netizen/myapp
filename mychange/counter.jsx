import { increment, decrement } from "../src/features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CounterBox() {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="bg-emerald-50 min-h-screen flex items-center justify-center">
      
      <div className="bg-white w-72 p-8 rounded-2xl shadow-lg shadow-emerald-200 text-center">
        
        <h1 className="text-emerald-900 text-xl font-semibold mb-6">
          Counter Box
        </h1>

        {/* Counter Display */}
        <div className="text-emerald-500 text-5xl font-bold mb-8">
          {count}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => dispatch(decrement())}
            className="flex-1 py-2 rounded-lg bg-emerald-100 text-emerald-900 text-xl font-bold
                       hover:bg-emerald-200 transition"
          >
            −
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="flex-1 py-2 rounded-lg bg-emerald-500 text-white text-xl font-bold
                       hover:bg-emerald-600 transition"
          >
            +
          </button>
        </div>

      </div>
      
    </div>
  );
}
