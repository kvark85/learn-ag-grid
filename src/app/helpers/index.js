import {Position,  Classes, Tooltip } from "@blueprintjs/core";

export const regionValueFormatter = (params) => params.value ? `${params.value} область` : params.value;

export const priceValueGetter = (params) => params?.data?.price?.USD;

export const amountValueFormatter = (params) => params.value ? `$${params.value}` : params.value;

export const AmountCellRenderer = (props) => {
  debugger;
  const cellValue = props.valueFormatted;

  if(cellValue) {
    return (
      <Tooltip
        className={Classes.TOOLTIP_INDICATOR}
        position={Position.TOP}
        content={
          <span>
            <strong>UAH:</strong> {`${props?.data?.price?.UAH} гр.`}
          </span>
        }
      >
        {cellValue}
      </Tooltip>
    );
  }
  return '';
}
