import React from "react";
import { Collapse, Divider} from "antd";

const { Panel } = Collapse;

export default function Accord(props) {
  return (
    <>
      <Divider />
      <Collapse bordered={false} ghost size="small">
        <Panel header={props.accordHeader}>
          <p>{props.accordText}</p>
        </Panel>
      </Collapse>
    </>
  );
}
