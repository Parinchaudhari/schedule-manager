'use client'
import React from 'react'
import { Avatar, Badge, Button, Popover, Table } from "keep-react";
import { ArrowDown, Cube, DotsThreeOutline, Pencil, Trash } from "phosphor-react";
import Image from 'next/image';
import { DropdownComponent } from './DropDownComponent';

export default function TableComponent() {
  return (
    <Table>
    <Table.Caption>
      <div className="my-5 flex items-center justify-between px-6 mx-10">
        <div className="flex items-center gap-5">
          <p className="text-body-1 font-semibold text-metal-600">Team member</p>
          {/* <Badge size="sm" color="secondary">100 Member</Badge> */}
        </div>
      </div>
    </Table.Caption>
    <Table.Head>
      <Table.HeadCell className="min-w-[290px]">
        <p className="text-body-5 font-medium text-metal-400">Type</p>
      </Table.HeadCell>
      <Table.HeadCell>Status</Table.HeadCell>
      <Table.HeadCell className="min-w-[152px]">Role</Table.HeadCell>
      <Table.HeadCell className="min-w-[240px]">Email Address</Table.HeadCell>
      <Table.HeadCell className="min-w-[215px]">Team</Table.HeadCell>
      <Table.HeadCell className="min-w-[200px]">Action</Table.HeadCell>
      <Table.HeadCell className="min-w-[100px]" />
    </Table.Head>
    <Table.Body className="divide-gray-25 divide-y">
      <Table.Row className="bg-white">
        <Table.Cell>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar img="/images/avatar/avatar-4.png" />
                <div>
                  <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Ralph Edwards</p>
                  <span>&ralph</span>
                </div>
              </div>
            </div>
          </div>
        </Table.Cell>
        <Table.Cell>
          <Badge color="success" showIcon={true}>
            Active
          </Badge>
        </Table.Cell>
        <Table.Cell>
          <p>UI/UX Designer</p>
        </Table.Cell>
        <Table.Cell>nevaeh.simmons@example.com</Table.Cell>
        <Table.Cell>
          <div className="flex items-center gap-1">
            <Badge>
              Product
            </Badge>
            <Badge>
              Marketing
            </Badge>
            <Badge color="secondary">
              +3
            </Badge>
          </div>
        </Table.Cell>
        <Table.Cell>
         <DropdownComponent options={["Edit","Delete","AddAvailability"]}/>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  
  
  )
}
