"use client";

import Select, {
  type MenuListProps,
  type SingleValueProps,
  components,
} from "react-select";
import React, {
  type HTMLProps,
  type Ref,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { rootStructure, CaretDown, CaretRight, Cloud, Structure } from "./data";

type SelectDirectoryOption = {
  //value of directory option
  value: string;
  //label of directory option
  label: string;
  //depth for paddingLeft each option
  depth: number;
  // address details for each directory option
  address: { id: string; name: string }[];
  // accessible  for each directory option (option disable whhen accessible = false )
  accessible: boolean;
  //option này có thể mở hay không
  isCanExpand: boolean;
};

interface CustomOptionProps extends Omit<HTMLProps<HTMLDivElement>, "data"> {
  data: SelectDirectoryOption;
  innerRef: Ref<HTMLDivElement>;
  innerProps: HTMLProps<HTMLDivElement>;
  isFocused: boolean;
  optionIsExpand: Record<string, boolean>;
  isVisiable: Record<string, boolean>;
  setOptionIsExpand: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
  selectedOptions: SelectDirectoryOption[];
  setSelectedOptions: React.Dispatch<
    React.SetStateAction<SelectDirectoryOption[]>
  >;
}

//component for custom option
const CustomOption = (props: CustomOptionProps) => {
  const {
    data,
    innerRef,
    innerProps,
    setOptionIsExpand,
    optionIsExpand,
    setSelectedOptions,
    isVisiable,
  } = props;

  return (
    isVisiable[data.value] && (
      <div
        ref={innerRef}
        {...innerProps}
        className={cn(
          "border-text-neutral-100 flex items-center gap-2 border-b pb-3 pl-2 pr-3 pt-3 hover:bg-primary-50",
          {
            //css for option focusing
            "bg-red-200": props.isFocused && data.accessible,
            "text-gray-500": props.isFocused && !data.accessible,
          },
          !data.accessible
            ? "pointer-events-none cursor-not-allowed text-gray-400"
            : "pointer-events-none cursor-auto"
        )}
        style={{
          paddingLeft: `${data.depth * 40}px`,
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setOptionIsExpand((prev) => ({
              ...prev,
              [data.value]: !prev[data.value],
            }));
            data.isCanExpand &&
              setSelectedOptions((prev) => {
                if (prev.includes(data)) {
                  return prev.filter((item) => item !== data);
                } else {
                  return [...prev, data];
                }
              });
          }}
          className={cn(
            "flex w-5 items-center justify-center",
            !data.accessible
              ? "pointer-events-none cursor-not-allowed"
              : "pointer-events-auto cursor-pointer"
          )}
        >
          {data.depth === 0 && !data.isCanExpand ? (
            <Cloud />
          ) : data.isCanExpand && optionIsExpand[data.value] ? (
            <CaretDown />
          ) : (
            <CaretRight />
          )}
        </div>

        <span
          //css for option text
          className={cn(
            "w-full text-xl ",
            { "font-semibold underline": props.isFocused && data.accessible },

            !data.accessible
              ? "pointer-events-none cursor-not-allowed"
              : "pointer-events-auto cursor-pointer"
          )}
        >
          {data.label}
          {`---${data.value}`}
        </span>
      </div>
    )
  );
};

// component for custom list container options
const CustomMenuList = (props: MenuListProps<SelectDirectoryOption>) => {
  return (
    <components.MenuList className={"scrollbar mb-3 ml-6 mr-6 mt-3"} {...props}>
      {props.children}
    </components.MenuList>
  );
};

// component for select single value
const CustomSingleValue = (props: SingleValueProps<SelectDirectoryOption>) => {
  const { data } = props;
  return (
    <components.SingleValue {...props}>
      {data.address.map((addr) => addr.name).join(" / ")}
    </components.SingleValue>
  );
};

// float data
const flatData = (
  node: Structure,
  depth = 0,
  parentAddress: { id: string; name: string }[] = []
): SelectDirectoryOption[] => {
  const currentAddress = [
    ...parentAddress,
    { id: node.directory.id, name: node.directory.name },
  ];

  const isCanExpand =
    node.children?.some((child) => child.directory.id) ?? false;

  const children = (node.children ?? []).flatMap((child) =>
    flatData(child, depth + 1, currentAddress)
  );
  const currentNode: SelectDirectoryOption = {
    value: node.directory.id,
    label: node.directory.name,
    address: currentAddress,
    accessible: node.accessible,
    depth,
    isCanExpand,
  };
  return [currentNode, ...children];
};

const SelectDirectory = () => {
  const staticOption = useRef<SelectDirectoryOption>({
    value: "00000000000000001",
    label: "Không thuộc tổ chức nào",
    address: [
      {
        id: "00000000000000001",
        name: "Không thuộc tổ chức nào",
      },
    ],
    isCanExpand: false,
    accessible: true,
    depth: 0,
  });

  const options = useMemo(() => {
    const flatOptions = flatData({
      accessible: true,
      directory: {
        name: "Viettel FE Test Organization",
        id: "123123h9234234234234",
      },
      projects: [],
      children: [rootStructure],
    });

    return [staticOption.current, ...flatOptions];
  }, []);

  // what option is expaned by option value = true and not expaned = false
  const [optionIsExpand, setOptionIsExpand] = useState<Record<string, boolean>>(
    () => Object.fromEntries(options.map((item) => [item.value, true]))
  );

  // set current toggle option
  const [selectedOptions, setSelectedOptions] = useState<
    SelectDirectoryOption[]
  >([]);
  // const collapsedOptions = useMemo(
  //   () => Object.keys(optionIsExpand).filter((key) => !optionIsExpand[key]),
  //   [optionIsExpand]
  // );

  /* Khi optionIsExpand thay đổi thì 
  thực hiện duyệt qua các option có value khác với key của optionIsExpand đang có value = false
  - Thực hiện duyệt mảng address của option đó, nếu trong mảng address có chứa address.id bằng với key của optionIsExpand đang có value = false
  - Thực hiện trả về key option với value là false,
  - Kết quả cuối cùng cũng là 1 object với key của từng option và giá trị là boolean
  - Hãy chắc rằng đã xử lý rằng option = với key isOpen đang cps value là flase thì trong object isVisiable trả về luôn là true,
  những option con của nó sẽ là false nếu isOpen[key cha của nó] = false
  */
  // const isVisiable = useMemo(() => {
  //   const result: Record<string, boolean> = Object.fromEntries(
  //     options.map((item) => [item.value, true])
  //   );
  //   if (!selectedOption) return result;
  //   options.forEach((option) => {
  //     if (
  //       // lấy option khác bằng option được chọn
  //       selectedOption.value !== option.value &&
  //       //lấy option có depth lớn hơn option được chọn
  //       option.depth > selectedOption.depth &&
  //       //lấy option có address chứa option id được chọn
  //       option.address.map((item) => item.id).includes(selectedOption.value)
  //     ) {
  //       console.log(option.value);
  //       result[option.value] = false;
  //       if (optionIsExpand[selectedOption.value]) {
  //         result[option.value] = true;
  //       }
  //     }
  //   });

  //   return result;
  // }, [options, selectedOption, optionIsExpand]);

  // const isVisiable = useMemo(() => {
  //   const result: Record<string, boolean> = Object.fromEntries(
  //     options.map((item) => [item.value, true])
  //   );

  //   selectedOptions.forEach((selectedOption) => {
  //     options.forEach((option) => {
  //       if (
  //         selectedOption.value !== option.value &&
  //         option.depth > selectedOption.depth &&
  //         option.address.map((item) => item.id).includes(selectedOption.value)
  //       ) {
  //         result[option.value] = false;
  //         if (optionIsExpand[selectedOption.value]) {
  //           result[option.value] = true;
  //         }
  //       }
  //     });
  //   });

  //   return result;
  // }, [options, selectedOptions, optionIsExpand]);

  //optimize
  const isVisiable = useMemo(() => {
    const result: Record<string, boolean> = Object.fromEntries(
      options.map((item) => [item.value, true]) // Mặc định tất cả đều hiển thị
    );

    selectedOptions.forEach((selectedOption) => {
      options.forEach((option) => {
        if (
          // Điều kiện để ẩn option
          selectedOption.value !== option.value && // Không phải chính option đang được chọn
          option.depth > selectedOption.depth && // Option có độ sâu lớn hơn option được chọn
          option.address.some((addr) => addr.id === selectedOption.value) // Option thuộc cùng nhánh với option được chọn
        ) {
          // Nếu parent (selectedOption) bị đóng, ẩn các con (option)
          result[option.value] = optionIsExpand[selectedOption.value]
            ? true // Parent mở, con hiển thị
            : false; // Parent đóng, con ẩn
        }
      });
    });

    return result;
  }, [options, selectedOptions, optionIsExpand]);

  const resetExpandAndVisibility = useCallback(
    () => {
      setOptionIsExpand(
        Object.fromEntries(options.map((item) => [item.value, true]))
      );
      setSelectedOptions([]); // Xóa trạng thái selected options
    },
    [options] // Phụ thuộc vào danh sách `options`
  );
  console.log(selectedOptions);
  return (
    <Select
      onInputChange={() => {
        //fix khi click ra ngoài bị tự unfocus và chạy hàm dưới
        resetExpandAndVisibility();
      }}
      onKeyDown={(e) => {
        if (e.key === "Tab" || e.key === "ArrowDown" || e.key === "ArrowUp") {
          resetExpandAndVisibility();
        }
      }}
      menuIsOpen
      instanceId={`${rootStructure.directory.id}-instance`}
      name="target"
      placeholder="{Organization name}/{Directory name 1}/{Directory name 2}"
      isClearable
      isSearchable
      options={options}
      components={{
        Option: (props) => (
          <CustomOption
            {...props}
            setOptionIsExpand={setOptionIsExpand}
            optionIsExpand={optionIsExpand}
            isVisiable={isVisiable}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        ),
        MenuList: CustomMenuList,
        SingleValue: CustomSingleValue,
      }}
    />
  );
};

export default React.memo(SelectDirectory);
