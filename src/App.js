import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, RichUtils } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./styles.css";
import { convertFromHTML, convertToHTML } from "draft-convert";

const toolBarValues = {
  options: ["inline", "colorPicker", "textAlign", "link", "image"],
  inline: {
    inDropdown: false,
    options: ["bold", "italic", "underline", "strikethrough"]
  }
};

const ShowMore = (props) => {
  const { editorState, onChange } = props;

  const applyStyle = (inlineStyle) => {
    const newState = RichUtils.toggleInlineStyle(editorState, inlineStyle);
    onChange(newState);
  };

  return (
    <main>
      <section>
        <button onClick={() => applyStyle("LINE100")}>LINE-100</button>
        <button onClick={() => applyStyle("LINE110")}>LINE-110</button>
        <button onClick={() => applyStyle("LINE130")}>LINE-130</button>
        <button onClick={() => applyStyle("LINE150")}>LINE-150</button>
        <button onClick={() => applyStyle("LINE200")}>LINE-200</button>
        <button onClick={() => applyStyle("LINE300")}>LINE-300</button>
      </section>
      <section>
        <button onClick={() => applyStyle("LS0")}>LS-0</button>
        <button onClick={() => applyStyle("LS1")}>LS-1</button>
        <button onClick={() => applyStyle("LS2")}>LS-2</button>
        <button onClick={() => applyStyle("LS3")}>LS-3</button>
        <button onClick={() => applyStyle("LS4")}>LS-4</button>
        <button onClick={() => applyStyle("LS5")}>LS-5</button>
        <button onClick={() => applyStyle("LS6")}>LS-6</button>
        <button onClick={() => applyStyle("LS7")}>LS-7</button>
        <button onClick={() => applyStyle("LS8")}>LS-8</button>
        <button onClick={() => applyStyle("LS9")}>LS-9</button>
        <button onClick={() => applyStyle("LS10")}>LS-10</button>
        <button onClick={() => applyStyle("LS15")}>LS-15</button>
        <button onClick={() => applyStyle("LS20")}>LS-20</button>
      </section>
    </main>
  );
};

export default function App() {
  const propsValue = `<p><strong>Effective emails</strong></p>
  <p style="font-size: 30px">Its best to use your full name and the name of your company as a From email, for example, <span style="color: rgb(218, 19, 19)">John Smith.</span></p>
  <ul>
    <li>This will let your subscribers understand who is writing to them without even opening your email.&nbsp;</li>
  </ul>
  <ol>
    <li>Use your subscribers name in the beginning of your <span style="letter-spacing: 7px">newsletter. &nbsp;</span></li>
  </ol>
  <p>t<span style="line-height: 300%">ext added using source code editor </span><span style="background-color: #d81d1d"><span style="line-height: 300%">John Smith.</span></span><span style="line-height: 300%"> max Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</span></p>
  <p><span style="line-height: 300%"><span style="line-height: 100%">The recipient is less likely to read an email starting with dear sir or madam.&nbsp;</span></span></p>
  <p><br></p>
  <figure><img src="https://cdn.convertcart.com/esp/90573420/b02f174a.png" alt="off-image" height="100px" width="100px"/></figure>
  <p><br></p>
  <p><a href="https://cdn.convertcart.com/esp/90573420/29070e9c.png" title="link">link</a>&nbsp;</p>
  <p>left</p>
  <p>right</p>
  <p>center</p>
  <p>justify</p>`;

  const contentState = convertFromHTML({
    htmlToStyle: (nodeName, node, currentStyle) => {
      // console.log("htmlToStyle", node.style);
      if (nodeName === "span" && node.style.color) {
        return currentStyle;
      }
      if (nodeName === "span" && node.style.letterSpacing === "0px") {
        return currentStyle.add("LS0");
      }
      if (nodeName === "span" && node.style.letterSpacing === "1px") {
        return currentStyle.add("LS1");
      }
      if (nodeName === "span" && node.style.letterSpacing === "2px") {
        return currentStyle.add("LS2");
      }
      if (nodeName === "span" && node.style.letterSpacing === "3px") {
        return currentStyle.add("LS3");
      }
      if (nodeName === "span" && node.style.letterSpacing === "4px") {
        return currentStyle.add("LS4");
      }
      if (nodeName === "span" && node.style.letterSpacing === "5px") {
        return currentStyle.add("LS5");
      }
      if (nodeName === "span" && node.style.letterSpacing === "6px") {
        return currentStyle.add("LS6");
      }
      if (nodeName === "span" && node.style.letterSpacing === "7px") {
        return currentStyle.add("LS7");
      }
      if (nodeName === "span" && node.style.letterSpacing === "8px") {
        return currentStyle.add("LS8");
      }
      if (nodeName === "span" && node.style.letterSpacing === "9px") {
        return currentStyle.add("LS9");
      }
      if (nodeName === "span" && node.style.letterSpacing === "10px") {
        return currentStyle.add("LS10");
      }
      if (nodeName === "span" && node.style.letterSpacing === "15px") {
        return currentStyle.add("LS15");
      }
      if (nodeName === "span" && node.style.letterSpacing === "20px") {
        return currentStyle.add("LS20");
      }
      if (nodeName === "span" && node.style.lineHeight === "100%") {
        return currentStyle.add("LINE100");
      }
      if (nodeName === "span" && node.style.lineHeight === "110%") {
        return currentStyle.add("LINE110");
      }
      if (nodeName === "span" && node.style.lineHeight === "130%") {
        return currentStyle.add("LINE130");
      }
      if (nodeName === "span" && node.style.lineHeight === "150%") {
        return currentStyle.add("LINE150");
      }
      if (nodeName === "span" && node.style.lineHeight === "200%") {
        return currentStyle.add("LINE200");
      }
      if (nodeName === "span" && node.style.lineHeight === "300%") {
        return currentStyle.add("LINE300");
      } else {
        return currentStyle;
      }
    },
    htmlToEntity: (nodeName, node, createEntity) => {
      if (nodeName === "a") {
        return createEntity("LINK", "MUTABLE", { url: node.href });
      }
    }
  })(propsValue);
  console.log("propsValue", propsValue);
  const defaultState = EditorState.createWithContent(contentState);

  const [localValue, setLocalValue] = useState(
    () => defaultState || EditorState.createEmpty()
  );

  const onValueChange = (editorState) => {
    setLocalValue(editorState);
    const editorContent = editorState.getCurrentContent();
    const html = convertToHTML({
      styleToHTML: (style) => {
        if (style === "LINE100") {
          return <span style={{ lineHeight: "100%" }} />;
        }
        if (style === "LINE110") {
          return <span style={{ lineHeight: "110%" }} />;
        }
        if (style === "LINE130") {
          return <span style={{ lineHeight: "130%" }} />;
        }
        if (style === "LINE150") {
          return <span style={{ lineHeight: "150%" }} />;
        }
        if (style === "LINE200") {
          return <span style={{ lineHeight: "200%" }} />;
        }
        if (style === "LINE300") {
          return <span style={{ lineHeight: "300%" }} />;
        }
        if (style === "LS0") {
          return <span style={{ letterSpacing: "0px" }} />;
        }
        if (style === "LS1") {
          return <span style={{ letterSpacing: "1px" }} />;
        }
        if (style === "LS2") {
          return <span style={{ letterSpacing: "2px" }} />;
        }
        if (style === "LS3") {
          return <span style={{ letterSpacing: "3px" }} />;
        }
        if (style === "LS4") {
          return <span style={{ letterSpacing: "4px" }} />;
        }
        if (style === "LS5") {
          return <span style={{ letterSpacing: "5px" }} />;
        }
        if (style === "LS6") {
          return <span style={{ letterSpacing: "6px" }} />;
        }
        if (style === "LS7") {
          return <span style={{ letterSpacing: "7px" }} />;
        }
        if (style === "LS8") {
          return <span style={{ letterSpacing: "8px" }} />;
        }
        if (style === "LS9") {
          return <span style={{ letterSpacing: "9px" }} />;
        }
        if (style === "LS10") {
          return <span style={{ letterSpacing: "10px" }} />;
        }
        if (style === "LS15") {
          return <span style={{ letterSpacing: "15px" }} />;
        }
        if (style === "LS20") {
          return <span style={{ letterSpacing: "20px" }} />;
        }
      }
    })(editorContent);
    console.log("convertHTML", html);
  };

  return (
    <div className="App">
      <header className="App-header">Rich Text Editor Example</header>
      <Editor
        editorState={localValue}
        onEditorStateChange={onValueChange}
        toolbar={toolBarValues}
        customStyleMap={editorStyleMap}
        toolbarCustomButtons={[<ShowMore />]}
      />
    </div>
  );
}

const editorStyleMap = {
  LINE100: {
    lineHeight: "100%"
  },
  LINE110: {
    lineHeight: "110%"
  },
  LINE130: {
    lineHeight: "130%"
  },
  LINE150: {
    lineHeight: "150%"
  },
  LINE200: {
    lineHeight: "200%"
  },
  LINE300: {
    lineHeight: "300%"
  },
  LS0: {
    letterSpacing: "0px"
  },
  LS1: {
    letterSpacing: "1px"
  },
  LS2: {
    letterSpacing: "2px"
  },
  LS3: {
    letterSpacing: "3px"
  },
  LS4: {
    letterSpacing: "4px"
  },
  LS5: {
    letterSpacing: "5px"
  },
  LS6: {
    letterSpacing: "6px"
  },
  LS7: {
    letterSpacing: "7px"
  },
  LS8: {
    letterSpacing: "8px"
  },
  LS9: {
    letterSpacing: "9px"
  },
  LS10: {
    letterSpacing: "10px"
  },
  LS15: {
    letterSpacing: "15px"
  },
  LS20: {
    letterSpacing: "20px"
  }
};
