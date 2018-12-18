import { useEffect } from "react";
import quicklink from "quicklink";

function useQuicklink(options) {
  useEffect(
    function runQuicklink() {
      quicklink(options);
    },
    [options]
  );
}

export default useQuicklink;
