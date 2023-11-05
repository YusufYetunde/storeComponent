"use client";

import React from "react";
import { useTable } from "react-table";
import cls from "classnames";
import Image from "next/image";

type SizeChartProps = {
  data: Record<string, string>[];
  imageSrc: string;
};

const Sizes: React.FC<SizeChartProps> = ({ data, imageSrc }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Size",
        accessor: "size",
      },
      {
        Header: "Bust (inches)",
        accessor: "bust",
      },
      {
        Header: "Waist (inches)",
        accessor: "waist",
      },
      {
        Header: "Hips (inches)",
        accessor: "hips",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className=" flex flex-col md:flex-row">
      <div className="w-full  p-4 rounded-md  md:w-2/3">
        <h2 className="text-2xl text-center font-semibold mb-4">
          UK Size Chart
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-fixed" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="px-2 py-1 text-sm text-center font-semibold"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, rowIndex) => {
                prepareRow(row);
                const isEvenRow = rowIndex % 2 === 0;
                const rowClasses = cls({
                  "bg-pink-100": isEvenRow,
                  "bg-blue-100": !isEvenRow,
                });
                return (
                  <tr {...row.getRowProps()} className={rowClasses}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="px-2 py-10 text-center text-xl"
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full h-auto md:w-1/3 py-4">
        <Image
          src={imageSrc}
          alt="Fashion"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Sizes;
