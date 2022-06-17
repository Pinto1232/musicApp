import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BiMenu } from 'react-icons/bi';
import DropdownLinks from './dropdownlinks/DropdownLinks';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const DropDown = () => {
	return (
		<div className=' flex justify-between'>
			<Menu as='div' className='relative inline-block text-left'>
				<div>
					<Menu.Button className='inline-flex m justify-center w-full rounded-md  shadow-sm px-4 py-2 bg-black-color text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
						<span>Menu</span>
						<BiMenu className='-mr-1 ml-2 h-6 w-5' aria-hidden='true' />
					</Menu.Button>
				</div>

				<Transition
					as={Fragment}
					enter='transition ease-out duration-100'
					enterFrom='transform opacity-0 scale-95'
					enterTo='transform opacity-100 scale-100'
					leave='transition ease-in duration-75'
					leaveFrom='transform opacity-100 scale-100'
					leaveTo='transform opacity-0 scale-95'>
					<Menu.Items className='origin-top-right absolute bg-smooth-black  mt-3 w-64 h-auto  shadow-lg bg-border-smooth-black-100 ring-black ring-opacity-8 focus:outline-none'>
						<div className='py-1'>
							<Menu.Item>
								{({ active }) => (
									<a
										href='#'
										className={classNames(
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											'block px-4 py-2 text-sm'
										)}>
										<DropdownLinks />
									</a>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
};

export default DropDown;
