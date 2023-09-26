import * as React from "react";

export function Card({
  className,
  title,
  children,
}: {
  className?: string;
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className={className}
    >
      <h2>
        {title}
      </h2>
      {children && (
        <div>{children}</div>
      )}
    </div>
  );
}
