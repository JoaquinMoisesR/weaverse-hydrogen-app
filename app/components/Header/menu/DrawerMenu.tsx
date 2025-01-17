import {Disclosure} from '@headlessui/react';
import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {Drawer, useDrawer} from '../../Drawer';
import {IconCaret} from '../../Icon';
import { getMaxDepth } from '~/lib/menu';
import { SingleMenuItem } from '~/lib/type';
import { EnhancedMenu } from '~/lib/utils';

export function DrawerMenu({ menu }: { menu: EnhancedMenu | null | undefined }) {
  let items = menu?.items as unknown as SingleMenuItem[];
  return (
    <nav className="grid text-foreground-subtle overflow-auto border-t-2 border-bar-subtle px-6 pb-16 pt-8">
      {items.map((item, id) => {
        let { title, ...rest } = item;
        let level = getMaxDepth(item);
        let isResourceType =
          item.items.length &&
          item.items.every((item) => item?.resource?.image && item.items.length === 0);
        let Comp: React.FC<SingleMenuItem> = isResourceType
          ? ImageMenu
          : level > 2
            ? MultiMenu
            : level === 2
              ? SingleMenu
              : ItemHeader;
        return <Comp key={id} title={title} {...rest} />;
      })}
    </nav>
  );
}

function ItemHeader({title, to}: {title: string; to: string}) {
  return (
    <div className="flex items-center justify-between py-3" role="button">
      <Link to={to}>
        <h5 className="font-medium text-xl uppercase hover:text-foreground">{title}</h5>
      </Link>
    </div>
  );
}

function MultiMenu(props: SingleMenuItem) {
  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();
  let {title, items, to} = props;
  let content = (
    <Drawer
      open={isMenuOpen}
      onClose={closeMenu}
      openFrom="left"
      heading={title}
      isBackMenu
      // bordered
    >
      <div className="grid overflow-auto px-6 pb-16 pt-8 border-t-2 border-bar-subtle">
        {items.map((item, id) => (
          <div key={id}>
            <Disclosure>
              {({open}) => (
                <>
                  <Disclosure.Button className="w-full text-left">
                    <h5 className="flex w-full text-xl justify-between py-3 font-medium uppercase text-foreground-subtle hover:text-foreground">
                      {item.title}
                      {item.items.length > 0 && <span className="">
                        <IconCaret
                          className="h-4 w-4"
                          direction={open ? 'down' : 'right'}
                        />
                      </span>}
                    </h5>
                  </Disclosure.Button>
                  {item?.items?.length > 0 ? (
                    <div
                      className={`${
                        open ? `h-fit max-h-48` : `max-h-0`
                      } overflow-hidden transition-all duration-300`}
                    >
                      <Disclosure.Panel static>
                        <ul className="space-y-3 pb-3 pt-2">
                          {item.items.map((subItem, ind) => (
                            <li key={ind} className="leading-6">
                              <Link
                                key={ind}
                                to={subItem.to}
                                prefetch="intent"
                                className="text-foreground-subtle"
                              >
                                <span className='font-body hover:text-foreground text-base font-normal'>{subItem.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </div>
                  ) : null}
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Drawer>
  );
  return (
    <div className="">
      <div
        className="flex items-center justify-between py-3 hover:text-foreground"
        role="button"
        onClick={openMenu}
      >
        <Link to={to} prefetch="intent">
          <h5 className="font-medium text-xl uppercase">{title}</h5>
        </Link>
        <IconCaret direction="right" className="h-4 w-4" />
      </div>
      {content}
    </div>
  );
}

function ImageMenu({title, items, to}: SingleMenuItem) {
  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();
  let content = (
    <Drawer
      open={isMenuOpen}
      onClose={closeMenu}
      openFrom="left"
      heading={title}
      isBackMenu
      // bordered
    >
      <div className="grid grid-cols-2 gap-3 px-6 pb-16 pt-8 border-t-2 border-bar-subtle">
        {items.map((item, id) => (
          <Link to={item.to} prefetch="intent" key={id}>
            <div className="relative aspect-square w-full group">
              <Image
                data={item.resource?.image}
                className="h-full w-full rounded object-cover"
                sizes="auto"
              />
              <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 text-center z-30">
                <h4 className='font-medium text-center text-white transition-all duration-300 text-2xl group-hover:underline'>{item.title}</h4>
              </div>
              <div className='absolute inset-0 opacity-0 group-hover:opacity-30 bg-foreground-subtle transition-opacity duration-300'/>
            </div>
          </Link>
        ))}
      </div>
    </Drawer>
  );
  return (
    <div className="">
      <div
        className="flex items-center justify-between py-3 hover:text-foreground"
        role="button"
        onClick={openMenu}
      >
        <Link to={to} prefetch="intent">
          <h5 className="font-medium text-xl uppercase">{title}</h5>
        </Link>
        <IconCaret direction="right" className="h-4 w-4" />
      </div>
      {content}
    </div>
    
  );
}

function SingleMenu(props: SingleMenuItem) {
  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();
  let {title, items, to} = props;
  let content = (
    <Drawer
      open={isMenuOpen}
      onClose={closeMenu}
      openFrom="left"
      heading={title}
      isBackMenu
      // bordered
    >
      <div className="grid overflow-auto px-6 pb-16 pt-8 border-t-2 border-bar-subtle">
        <ul className="space-y-3 pb-3 pt-2">
          {items.map((subItem, ind) => (
            <li key={ind} className="leading-6">
              <Link
                key={ind}
                to={subItem.to}
                prefetch="intent"
                className="text-foreground-subtle"
              >
                
                <span className='font-body hover:text-foreground text-base font-normal'>{subItem.title}</span>
              </Link>
              
            </li>
          ))}
        </ul>
      </div>
    </Drawer>
  );
  return (
    <div className="">
      <div
        className="flex items-center justify-between py-3 hover:text-foreground"
        role="button"
        onClick={openMenu}
      >
        <Link to={to} prefetch="intent">
          <h5 className="font-medium text-xl uppercase">{title}</h5>
        </Link>
        <IconCaret direction="right" className="h-4 w-4" />
      </div>
      
      {content}
    </div>
  );
}
