import {useCallback, Fragment} from "react";
import {Editable} from "slate-react";

import Leaf from "./components/Leaf";
import CodeInlineElement from "../../../../common/components/Node/CodeInlineElement";
import DefaultElement from "../../../../common/components/Node/DefaultElement";
import LinkElement from "../../../../common/components/Node/LinkElement";
import PrimaryTitleElement from "../../../../common/components/Node/PrimaryTitleElement";
import SecondaryTitleElement from "../../../../common/components/Node/SecondaryTitleElement";

const Editor = (props) => {
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code_inline":
        return <CodeInlineElement {...props} />
      case "link":
        return <LinkElement {...props} />
      case "dice-one":
        return <PrimaryTitleElement {...props} />
      case "dice-two":
        return <SecondaryTitleElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, []);
  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);
  return (
    <Fragment>
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} placeholder="输入内容"/>
    </Fragment>
  );
};

export default Editor;
