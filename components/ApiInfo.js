import {
  Box,
  List,
  ListIcon,
  ListItem,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react"
import { InfoIcon } from "@chakra-ui/icons"

const ApiInfo = () => {
  return (
    <Tooltip label={<Label />}>
      <InfoIcon />
    </Tooltip>
  )
}

const Label = () => {
  const display = useBreakpointValue({ base: "none", md: "inherit" })
  return (
    <Box>
      API limitations include:
      <List>
        <ListItem>
          <ListIcon as={InfoIcon} color="white.500" />
          The data updates only once a day
        </ListItem>
      </List>
    </Box>
  )
}

export default ApiInfo
