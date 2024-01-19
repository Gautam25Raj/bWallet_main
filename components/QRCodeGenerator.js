import React from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = ({
  value,
  size = 256,
  level = "H",
  bgColor = "transparent",
  fgColor = "url(#gradient)",
}) => {
  return (
    <div className="inline-block rounded-xl bg-black p-5">
      <QRCode
        value={value}
        renderAs="svg"
        level={level}
        size={size}
        bgColor={bgColor}
        fgColor={fgColor}
      />

      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#E51E2A" }} />
          <stop offset="100%" style={{ stopColor: "#EA13F2" }} />
        </linearGradient>
      </defs>
    </div>
  );
};

export default QRCodeGenerator;
