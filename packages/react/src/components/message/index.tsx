import { useImperativeHandle, useMemo, useRef, useState } from "react";
import type { IExpose, IProps } from "./types";
import { getPrevBottomOffset } from "./common";
import type { PropsWithRef } from "@/types";
import { CSSTransition } from "react-transition-group";

function LarkMessage(props: PropsWithRef<IProps, IExpose & HTMLDivElement>) {
  const {
    type = "info",
    duration = 3000,
    offset = 20,
    id,
    zIndex,
    showClose,
    ref,
  } = props;

  const [alive, setAlive] = useState(true);
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  const topOffset = useMemo(() => {
    return getPrevBottomOffset(id) + offset;
  }, [id, offset]);

  const buttonOffset = useMemo(() => topOffset + height, [topOffset, height]);

  useImperativeHandle<IExpose>(
    ref,
    {
      buttonOffset,
      display: alive,
    },
    [],
  );

  return <CSSTransition nodeRef={ref}></CSSTransition>;
}

export default LarkMessage;
