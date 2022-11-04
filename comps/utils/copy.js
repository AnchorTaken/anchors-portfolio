// Imports
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";

function Copy({ text, copyValue, imgPresent, copyOpen, copyClose }) {
  return (
    <>
      <CopyToClipboard text={copyValue} onCopy={copyOpen}>
        <button className="copy-btn">
          <span>{text}</span>
          {imgPresent != null && (
            <Image
              src={imgPresent}
              alt="copy"
              layout="fill"
              objectFit="contain"
              priority={true}
            />
          )}
        </button>
      </CopyToClipboard>{" "}
    </>
  );
}

export default Copy;
