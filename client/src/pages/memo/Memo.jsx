import "./memo.scss";
import * as marked from "marked";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import Prism from "prismjs";
import Draft, { RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import {
  ToolbarInline,
  ToolbarSide,
  ToolbarTop,
} from "../../components/toolbar/Toolbar";
import { getSelectionPosition, getSelectionRange } from "./utils/selection";

export const Memo = () => {
  const [raw, setRaw] = useState(placeholder);

  marked.setOptions({
    breaks: true,
    sanitizer: (md) => DOMPurify.sanitize(md),
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
  });
  const html = marked(raw);
  // const purified = DOMPurify.sanitize(afterMarked);
  return (
    <div className="memoContainer">
      <MyEditor sampleHTML={html} />
      {/* <TextEditor raw={raw} setRaw={setRaw} /> */}
      <Preview toPreview={html} />
    </div>
  );
};

const TextEditor = ({ raw, setRaw }) => {
  return (
    <div className="memoEditor">
      <textarea
        name="editor"
        id="editor"
        value={raw}
        onChange={({ target }) => setRaw(target.value)}
      />
    </div>
  );
};

const Preview = ({ toPreview }) => {
  return (
    <div
      id="preview"
      className="memoPreview"
      dangerouslySetInnerHTML={{ __html: toPreview }}
    ></div>
  );
};

const MyEditor = (props) => {
  const [showInlineToolBar, setShowInlineToolBar] = useState(false);
  const [position, setPosition] = useState({});
  const [editorState, setEditorState] = useState(() =>
    Draft.EditorState.createEmpty()
  );

  useEffect(() => {
    if (!editorState.getSelection().isCollapsed()) {
      const selectionRange = getSelectionRange();
      const selectionPosition = getSelectionPosition(selectionRange);
      setShowInlineToolBar(true);
      setPosition({
        top: selectionPosition.offsetTop,
        left: selectionPosition.offsetLeft,
      });
    } else {
      setShowInlineToolBar(false);
    }
  }, [editorState]);

  const handleKeyCommand = (cmd, editorState) => {
    const newState = Draft.RichUtils.handleKeyCommand(editorState, cmd);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onInlineStyle = (inlineStyle) => {
    const newState = RichUtils.toggleInlineStyle(editorState, inlineStyle);
    setEditorState(newState);
  };

  const onBlockStyle = (blockType) => {
    const newState = RichUtils.toggleBlockType(editorState, blockType);
    setEditorState(newState);
  };

  return (
    <div className="myEditor" id="richEditor">
      {showInlineToolBar ? (
        <ToolbarInline
          editorState={editorState}
          onToggle={onInlineStyle}
          pos={position}
        />
      ) : null}
      <ToolbarTop editorState={editorState} onToggle={onBlockStyle} />
      <Draft.Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        placeholder="Write something..."
      />
    </div>
  );
};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
