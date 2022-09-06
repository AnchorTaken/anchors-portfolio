// Imports
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";

function Copy({ text, copyValue, imgPresent }) {
  // State that manages the copy state
  const [copy, setCopy] = useState([{ value: "", copied: false }]);

  // Function that opens the popup and copies the text
  function copyOpen() {
    setCopy({ copied: true });
    copyClose();
  }

  // Function that closes the popup
  function copyClose() {
    setTimeout(() => setCopy({ copied: false }), 2500);
  }

  return (
    <>
      {copy.copied ? (
        <div className="copied animate__animated animate__fadeInRight">
          Copied
        </div>
      ) : (
        ""
      )}
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
