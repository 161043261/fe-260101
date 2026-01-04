import { useMemo, useState } from "react";
import type { IProps } from "./types";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import LarkIcon from "@/components/icon";
import type { PropsWithClassName } from "@/types";
import type { MouseEvent } from "react";

function LarkAlert(props: PropsWithClassName<IProps>) {
  const {
    closable = true,
    effect = "light",
    type,
    center,
    showIcon,
    title,
    description,
    closeText,
    className,
    onClose,
  } = props;

  const computedClass = useMemo(
    () => [
      `lark-alert--${type}`,
      `lark-alert--${effect}`,
      {
        "is-center": center,
      },
    ],
    [type, effect, center],
  );

  const [visible, setVisible] = useState(true);

  const getAlertIcon = useMemo(() => {
    switch (type) {
      case "error": {
        return "circle-xmark";
      }
      case "info": {
        return "circle-info";
      }
      case "success": {
        return "circle-check";
      }
      case "warning": {
        return "circle-exclamation";
      }
      default: {
        return "circle-info";
      }
    }
  }, [type]);

  const handleClose = (e: MouseEvent) => {
    setVisible(false);
    onClose?.(e);
  };

  return (
    <CSSTransition
      classNames="lark-alert-fade"
      in={visible}
      unmountOnExit
      timeout={200}
    >
      <div className={classNames(className, "lark-alert", computedClass)}>
        <div className="lark-alert__content">
          {showIcon && (
            <span className="lark-alert__icon">
              <LarkIcon
                icon={getAlertIcon}
                onClick={() => {
                  setVisible(false);
                }}
              />
            </span>
          )}

          <div className="lark-alert__message">
            <p className="lark-alert__title">{title}</p>

            {description && (
              <p className="lark-alert__description">{description}</p>
            )}
          </div>
        </div>

        {closable &&
          (closeText ? (
            <div onClick={handleClose} className="close-btn">
              {closeText}
            </div>
          ) : (
            <LarkIcon
              icon="xmark"
              onClick={handleClose}
              className="close-btn"
            />
          ))}
      </div>
    </CSSTransition>
  );
}

export default LarkAlert;
