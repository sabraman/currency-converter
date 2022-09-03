import {
	IconButton,
	useColorMode,
} from "@chakra-ui/react"

import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const Theme = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<IconButton pos={"absolute"} icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />} onClick={toggleColorMode} variant={"ghost"}>
		</IconButton>
	)
}

export default Theme
