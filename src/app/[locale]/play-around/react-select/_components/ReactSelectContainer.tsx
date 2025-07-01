"use client";

import React, { CSSProperties, useMemo } from "react";

import Select, {
  components,
  MenuListProps,
  MenuProps,
  MultiValueProps,
  OptionProps,
  PlaceholderProps,
  ValueContainerProps,
} from "react-select";

import { Checkbox } from "../../../../../components/ui/checkbox";
import {
  Category,
  OptionType,
  GroupedOption as GroupOption,
} from "./docs/category";
import { cn } from "../../../../../lib/utils";
import {
  ColourOption,
  FlavourOption,
  GroupedOption,
} from "@/app/[locale]/play-around/react-select/_components/docs/data";
import { Button } from "@/components/ui/button";

const Menu = (props: MenuProps<OptionType, true, GroupedOption>) => {
  const allOptions: ColourOption[] = props.options.flatMap((option) =>
    "options" in option
      ? (option.options as ColourOption[])
      : [option as ColourOption]
  );
  const isAllSelected = props.getValue().length === allOptions.length;
  const hasSelected = props.getValue().length > 0;
  const isIndeterminate = hasSelected && !isAllSelected;
  const handleCheckboxChange = () => {
    if (isAllSelected) {
      props.setValue([], "deselect-option");
      return;
    }
    props.setValue(allOptions, "select-option");
  };
  const currentChecked = isIndeterminate ? "indeterminate" : isAllSelected;

  return (
    <div className="DaddyMenu">
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
          <Checkbox checked={currentChecked} onClick={handleCheckboxChange} />
          <span className="cursor-pointer" onClick={handleCheckboxChange}>
            Tất cả
          </span>
        </div>
        {props.children}
      </components.Menu>
    </div>
  );
};

const Placeholder = (
  props: PlaceholderProps<OptionType, true, GroupedOption>
) => {
  return (
    <components.Placeholder
      {...props}
      className="text-gray-500 DaddyPlaceholder"
    ></components.Placeholder>
  );
};

const MultiValue = (
  props: MultiValueProps<OptionType, true, GroupedOption>
) => {
  const { children, innerProps } = props;
  const isLastOpption = props.index === props.selectProps.options.length - 1;
  const isFirstOption = props.index === 0;

  return (
    <div
      {...innerProps}
      className={cn(
        "flex items-center  py-3 group     hover:bg-red-200",
        {
          "pl-[12px] ": isFirstOption,
        },
        " transition-all duration-200 ease-in-out"
      )}
      onClick={(e) => {
        if (props.removeProps?.onClick) props.removeProps.onClick(e);
      }}
    >
      <label
        style={{
          fontSize: "14px",
        }}
        htmlFor={props.data.value}
      >
        {children}
      </label>
      <span
        className={cn("block mr-2 ", "group-hover:hidden", {
          hidden: props.index === props.getValue().length - 1,
        })}
      >
        ,
      </span>
    </div>
  );
};

const Option = (props: OptionProps<OptionType, true, GroupedOption>) => {
  const { children, innerProps, isSelected } = props;
  console.log(props);
  return (
    <div className="relative p-2">
      {/* <components.Option {...props}> */}
      {children}
      {isSelected && (
        <span className="absolute right-2 top-1/2 translate-y-[-50%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-6z" />
          </svg>
        </span>
      )}
      {/* </components.Option> */}
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
  const options = useMemo(
    () =>
      Category.map((item) => ({
        label: item.title,
        value: item.id,
      })),
    []
  );

  return (
    <Select<OptionType, true, GroupedOption>
      // menuIsOpen
      placeholder="Chon dich vu...."
      isClearable
      options={options}
      // formatGroupLabel={formatGroupLabel}
      isMulti
      closeMenuOnSelect={false}
      components={{
        Menu,
        IndicatorSeparator: () => null,
        Placeholder,
        MultiValue,
        // Option,

        // ValueContainer: CustomValueContainer,
      }}
      // blurInputOnSelect={false}
    />
  );
}
