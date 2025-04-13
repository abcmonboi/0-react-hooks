"use client";

import React, { CSSProperties } from "react";

import Select, {
  components,
  MenuListProps,
  MenuProps,
  ValueContainerProps,
} from "react-select";
import {
  ColourOption,
  colourOptions,
  FlavourOption,
  GroupedOption,
  groupedOptions,
} from "./docs/data";
import { Checkbox } from "../../../../../components/ui/checkbox";

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles: CSSProperties = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data: GroupedOption) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const CustomMenu = (
  props: MenuProps<ColourOption | FlavourOption, true, GroupedOption>
) => {
  const [isChecked, setChecked] = React.useState(false);
  return (
    <components.Menu
      {...props}
      className="mt-[5px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] !rounded-[8px] p-[0px_12px_12px_12px]"
    >
      <div
        style={{
          borderBottom: "0.5px solid #E3E4E4",
        }}
        className="flex items-center  bg-white gap-2 h-[44px] px-3"
        onMouseDown={(e) => e.preventDefault()} // Ngăn blur toàn bộ wrapper
      >
        <Checkbox
          id="all"
          checked={isChecked}
          onCheckedChange={(value: boolean) => setChecked(value)}
        />
        <span
          className="text-sm cursor-pointer"
          onClick={() => {
            const allOptions = props.options.flatMap((option) =>
              "options" in option ? option.options : [option]
            );

            const isAllSelected = props.getValue().length === allOptions.length;

            if (isAllSelected) {
              props.setValue([], "deselect-all");
              setChecked(false);
            } else {
              props.setValue(allOptions, "select-option");
              setChecked(true);
            }
          }}
        >
          Tất cả
        </span>
      </div>
      {props.children}
    </components.Menu>
  );
};

const CustomMenuList = (props: any) => {
  const { children, innerProps } = props;
  return (
    <div className="h-[250px] overflow-y-auto" style={{ backgroundColor: "" }}>
      {children}
    </div>
  );
};

const CustomOption = (props: any) => {
  const { children, innerProps, data } = props;
  return (
    <div
      {...innerProps}
      className="flex items-center gap-2 p-3 hover:bg-blue-200"
    >
      <label
        style={{
          fontSize: "14px",
        }}
        htmlFor={data.value}
      >
        {children}
      </label>
    </div>
  );
};

const CustomValueContainer = (
  props: ValueContainerProps<ColourOption | FlavourOption, true, GroupedOption>
) => {
  const { children, selectProps } = props;
  const selectPropsFilter = {
    ...selectProps,
    openMenuOnClick: false,
    openMenuOnFocus: false,
    menuIsOpen: true,
  };

  const customProps = {
    ...props,
    selectProps: selectPropsFilter,
  };
  console.log(customProps);
  return (
    // <components.ValueContainer {...customProps}>
    <div>{children}</div>
    // </components.ValueContainer>
  );
};

export default function ReactSelectContainer() {
  return (
    <Select<ColourOption | FlavourOption, true, GroupedOption>
      // menuIsOpen={true}
      defaultValue={colourOptions[1]}
      options={groupedOptions}
      formatGroupLabel={formatGroupLabel}
      isMulti
      closeMenuOnSelect={false}
      components={{
        Menu: CustomMenu,
        // MenuList: CustomMenuList,
        // Option: CustomOption,
        // ValueContainer: CustomValueContainer,
      }}
      blurInputOnSelect={false}
    />
  );
}
