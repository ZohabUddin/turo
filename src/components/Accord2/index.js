import React from "react";
import './index.css'
import { Collapse, Divider} from "antd";

const { Panel } = Collapse;

export default function Accord2(props) {
  return (
    <>
      <Divider />
      <Collapse bordered={false} ghost size="small">
        <Panel className="accord2Header"  header={props.accordHeader}>
            <div>
                {props.listItems.map((item,index)=>{
                    return <p className="accord2Text" >{item}</p>
                })}
            </div>
          <p>{props.accordText}</p>
        </Panel>
      </Collapse>
    </>
  );
}