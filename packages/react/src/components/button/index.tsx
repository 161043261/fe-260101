import { useMemo, useRef, type PropsWithChildren } from "react";
import type { IProps } from "./types";
import classNames from "classnames";
import LarkIcon from "@/components/icon";
import type { PropsWithClassName } from "@/types";

function LarkButton(props: PropsWithClassName<PropsWithChildren<IProps>>) {
  const {
    type = "primary",
    size = "medium",
    nativeType = "button",
    round,
    loading,
    circle,
    disabled,
    plain,
    icon,
    children,
    className,
  } = props;

  const computedClass = useMemo(() => {
    return [
      `lark-button--${type}`,
      `lark-button--${size}`,
      // props.round && 'is-round',
      // props.loading && 'is-loading',
      // props.circle && 'is-circle',
      // props.disabled && 'is-disabled',
      // props.plain && 'is-plain',
      {
        "is-round": round,
        "is-circle": circle,
        "is-disabled": disabled,
        "is-plain": plain,
      },
    ];
  }, [props]);

  const ref = useRef<HTMLButtonElement | null>(null);
  return (
    <button
      ref={ref}
      type={nativeType}
      className={classNames(className, "lark-button", computedClass)}
    >
      {loading && <LarkIcon icon="spinner" spin />}
      {icon && <LarkIcon icon={icon} />}
      <span>{children}</span>
    </button>
  );
}

export default LarkButton;
