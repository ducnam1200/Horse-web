/*eslint-disable*/
import { HamburgerIcon } from "@chakra-ui/icons";
// chakra imports
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import IconBox from "components/Icons/IconBox";
import { SimmmpleLogoWhite } from "components/Icons/Icons";
import { Separator } from "components/Separator/Separator";
import PropTypes from "prop-types";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

// FUNCTIONS

function Sidebar(props) {
  // to check for active links and opened collapses
  let location = useLocation();
  // this is for the rest of the collapses
  const [state, setState] = React.useState({});
  const mainPanel = React.useRef();
  let variantChange = "0.2s linear";
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes) => {
    const { sidebarVariant } = props;
    // Chakra Color Mode
    let inactiveBg = "#1A1F37";
    let activeColor = "white";
    let inactiveColor = "white";

    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      return (
        <NavLink to={prop.layout + prop.path}>
          <Button
            boxSize='initial'
            justifyContent='flex-start'
            alignItems='center'
            bg='transparent'
            mb={{
              xl: "12px",
            }}
            mx={{
              xl: "auto",
            }}
            py='12px'
            ps={{
              sm: "10px",
              xl: "10px",
            }}
            borderRadius='15px'
            // _hover='none'
            w='100%'
            _hover={{
              bg: inactiveBg,
              w: 'auto',
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}>
            <Flex
              flexDirection='column' >
              {typeof prop.icon === "string" ? (
                <Icon>{prop.icon}</Icon>
              ) : (
                <IconBox
                  // bg={inactiveBg}
                  color='brand.200'
                  h='76px'
                  w='76px'
                  // me='0px'
                  transition={variantChange}>
                  {prop.icon}
                </IconBox>
              )}
              <Text color={inactiveColor} my='auto' fontSize='14px'>
                {prop.name}
              </Text>
            </Flex>
          </Button>
        </NavLink>
      );
    });
  };
  const { logoText, routes, sidebarVariant } = props;

  var links = <>{createLinks(routes)}</>;
  //  BRAND
  //  Chakra Color Mode
  let sidebarBg =
    "radial-gradient(121.52% 106.77% at 0% 0%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(162.72deg, #202224 0%, #1A1C1F 100%);";
  let sidebarRadius = "16px";
  let sidebarMargins = "16px 0px 16px 16px";
  let boxShadow = "6px 6px 8px rgba(10, 12, 13, 0.35), 20px 20px 18px -4px rgba(23, 25, 26, 0.3), 20px 20px 32px -8px rgba(23, 25, 26, 0.4), inset -1px -1px 2px rgba(10, 12, 13, 0.25)"

  // SIDEBAR
  return (
    <Box ref={mainPanel}>
      <Box display={{ sm: "none", xl: "block" }} position='fixed'>
        <Box
          bg={sidebarBg}
          backdropFilter='blur(10px)'
          boxShadow={boxShadow}
          transition={variantChange}
          bgBlendMode="overlay, overlay, normal"
          w='130px'
          maxW='130px'
          ms={{
            sm: "0px",
          }}
          my={{
            sm: "0px",
          }}
          h='calc(100vh )'
          ps='20px'
          pe='20px'
          m={sidebarMargins}>
          <Stack direction='column' mb='60px'>
            <Box>{links}</Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

// FUNCTIONS

export function SidebarResponsive(props) {
  // to check for active links and opened collapses
  let location = useLocation();
  // this is for the rest of the collapses
  const [state, setState] = React.useState({});
  const mainPanel = React.useRef();
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes) => {
    // Chakra Color Mode
    const activeBg = "#1A1F37";
    const inactiveBg = "#1A1F37";
    const activeColor = "white";
    const inactiveColor = "white";

    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.category) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return (
          <>
            <Text
              color={activeColor}
              fontWeight='bold'
              mb={{
                xl: "12px",
              }}
              mx='auto'
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py='12px'>
              {document.documentElement.dir === "rtl"
                ? prop.rtlName
                : prop.name}
            </Text>
            {createLinks(prop.views)}
          </>
        );
      }
      return (
        <NavLink to={prop.layout + prop.path}>
          <Button
            boxSize='initial'
            justifyContent='flex-start'
            alignItems='center'
            bg='transparent'
            mb={{
              xl: "12px",
            }}
            mx={{
              xl: "auto",
            }}
            py='12px'
            ps={{
              sm: "10px",
              xl: "16px",
            }}
            borderRadius='15px'
            _hover='none'
            w='100%'
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}>
            <Flex>
              {typeof prop.icon === "string" ? (
                <Icon>{prop.icon}</Icon>
              ) : (
                <IconBox
                  bg={inactiveBg}
                  color='brand.200'
                  h='30px'
                  w='30px'
                  me='12px'>
                  {prop.icon}
                </IconBox>
              )}
              <Text color={inactiveColor} my='auto' fontSize='sm'>
                {document.documentElement.dir === "rtl"
                  ? prop.rtlName
                  : prop.name}
              </Text>
            </Flex>
          </Button>
        </NavLink>
      );
    });
  };
  const { logoText, routes, iconColor, ...rest } = props;

  var links = <>{createLinks(routes)}</>;
  //  BRAND
  //  Chakra Color Mode
  var brand = (
    <Box pt={"35px"} mb='8px'>
      <Link
        href={`${process.env.PUBLIC_URL}/#/`}
        target='_blank'
        display='flex'
        lineHeight='100%'
        mb='30px'
        fontWeight='bold'
        justifyContent='center'
        alignItems='center'
        fontSize='11px'>
        <SimmmpleLogoWhite w='22px' h='22px' me='10px' mt='2px' />
        <Box
          bg='linear-gradient(97.89deg, #FFFFFF 70.67%, rgba(117, 122, 140, 0) 108.55%)'
          bgClip='text'>
          <Text fontSize='sm' letterSpacing='3px' mt='3px' color='transparent'>
            {logoText}
          </Text>
        </Box>
      </Link>
      <Separator></Separator>
    </Box>
  );

  // SIDEBAR
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // Color variables
  return (
    <Flex
      display={{ sm: "flex", xl: "none" }}
      ref={mainPanel}
      alignItems='center'>
      <HamburgerIcon
        color={iconColor}
        w='18px'
        h='18px'
        ref={btnRef}
        colorScheme='teal'
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={document.documentElement.dir === "rtl" ? "right" : "left"}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent
          backdropFilter='blur(10px)'
          bg='linear-gradient(111.84deg, rgba(6, 11, 38, 0.94) 59.3%, rgba(26, 31, 55, 0) 100%); '
          w='250px'
          maxW='250px'
          ms={{
            sm: "16px",
          }}
          my={{
            sm: "16px",
          }}
          borderRadius='16px'>
          <DrawerCloseButton
            color='white'
            _focus={{ boxShadow: "none" }}
            _hover={{ boxShadow: "none" }}
          />
          <DrawerBody maxW='250px' px='1rem'>
            <Box maxW='100%' h='100vh'>
              <Box>{brand}</Box>
              <Stack direction='column' mb='40px'>
                <Box>{links}</Box>
              </Stack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
// PROPS

Sidebar.propTypes = {
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  variant: PropTypes.string,
};
SidebarResponsive.propTypes = {
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

export default Sidebar;
