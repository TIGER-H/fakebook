import { useState } from "react";
import "./toolbar.css";

const BLOCKTYPES = [
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "UL", style: "unordered-list-item" },
  { label: "OL", style: "ordered-list-item" },
  { label: '"', style: "blockquote" },
];

const INLINESTYLES = [
  { icon: "a-bold", style: "BOLD" },
  { icon: "a-italic", style: "ITALIC" },
];

const ToolbarList = ({ editorState, onToggle, types }) => {
  //   const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(editorState.getSelection().getStartKey())
    .getType();
  return (
    <ul className="toolbarIcons">
      {types.map((type) => (
        <li
          className="toolbarIcon"
          key={type.label}
          onMouseDown={(e) => {
            e.preventDefault();
            onToggle(type.style);
          }}
        >
          {type.label ? type.label : <i className={type.icon}></i>}
        </li>
      ))}
    </ul>
  );
};

export const Toolbar_top = ({ editorState, onToggle }) => (
  <div className="toolbarTop">
    <span>BlockStyles</span>
    <ToolbarList
      editorState={editorState}
      onToggle={onToggle}
      types={BLOCKTYPES}
    />
  </div>
);

export const Toolbar_hover = ({ editorState, onToggle }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="toolbar">
      <i className="upload-photo"></i>
      <div
        className="toolbarMenu"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onMouseDown={(e) => e.preventDefault()}
      >
        {isOpen ? (
          <ToolbarList
            editorState={editorState}
            onToggle={onToggle}
            types={INLINESTYLES}
          />
        ) : null}
      </div>
    </div>
  );
};

export const Toolbar_inline = ({ editorState, onToggle, pos }) => {
  // pos for inline toolbar position
  const currentStyle = editorState.getCurrentInlineStyle();
  console.log(pos);
  return (
    <div className="toolbarInline" style={pos}>
      <ToolbarList
        editorState={editorState}
        onToggle={onToggle}
        types={INLINESTYLES}
      />
    </div>
  );
};
