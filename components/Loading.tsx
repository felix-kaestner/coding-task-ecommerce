import type { FunctionComponent } from "react";

const Loading: FunctionComponent = () => (
    <span className="flex justify-center">
      <span className="animate-ping h-6 w-6 rounded-full bg-indigo-500 opacity-75"/>
    </span>
)

export default Loading