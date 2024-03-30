import { Box, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Node from "./Node";
import GavelIcon from "@mui/icons-material/Gavel";
import { useTheme } from "@emotion/react";
import Condition from "./Condition";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FolderIcon from "@mui/icons-material/Folder";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RedoIcon from "@mui/icons-material/Redo";
import Assignment from "./Assignment";
import BdtSidePanelContent from "./Content/BdtSidePanelContent.jsx";
import BdtSidePanelAction from "./Content/BdtSidePanelAction.jsx";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Action from "./Node/Action.jsx";
import ActionText from "./Node/ActionText.jsx";
import Container from "./Container/index.jsx";
import If from "./If/index.jsx";

export const components = {
  Rule: (props) => (
    <Container
      {...props}
      items={props.items}
      Icon={<GavelIcon htmlColor="goldenrod" />}
      title={props.name}
    />
  ),

  Section: (props) => (
    <Container
      {...props}
      items={props.block}
      Icon={<FolderIcon htmlColor="orange" />}
      title={props.name}
    />
  ),

  If: If,

  InsertTextpiece: (props) => (
    <Node
      {...props}
      title="Insert Content"
      titleColor="red"
      evaluated={props.evaluated}
      Content={() => (
        <Action Icon={<TextSnippetIcon htmlColor="red" />}>{props.name}</Action>
      )}
    />
  ),

  DbQuery: (props) => (
    <Node
      {...props}
      title="Read"
      evaluated={props.evaluated}
      titleColor="darkTurquoise"
      Content={() => (
        <Box>
          {props.fromTables.map((table) => (
            <Action Icon={<SearchIcon htmlColor="skyblue" />}>
              {table.tableName}
            </Action>
          ))}
          <ActionText color="lightgreen">Where</ActionText>
          <Condition props={props}></Condition>
        </Box>
      )}
    />
  ),

  Assignment: (props) => (
    <Node
      {...props}
      title="Assignment"
      titleColor="darkviolet"
      Content={() => (
        <Action Icon={<ArrowRightAltIcon htmlColor="violet" />}>
          <Assignment assignments={props.assignments} />
        </Action>
      )}
    />
  ),

  GetRSFieldValue: (props) => (
    <Node
      {...props}
      evaluated={props.evaluated}
      title="GET FROM DATASET"
      titleColor="darkBlue"
      Content={() => (
        <Box>
          <Action
            Icon={
              <ArrowRightAltIcon
                sx={{ transform: "rotate(180deg)" }}
                htmlColor="blue"
              />
            }
          >
            {props.dbField.name}
          </Action>
          <Action Icon={<ArrowRightAltIcon htmlColor="blue" />}>
            {props.variable.name}
          </Action>
        </Box>
      )}
    />
  ),

  ReplaceVariables: (props) => (
    <Node
      {...props}
      title="Replace"
      titleColor="purple"
      Content={() => {
        return (
          <>
            {props.recordSetVar && (
              <Action Icon={<CompareArrowsIcon htmlColor="magenta" />}>
                {props.recordSetVar?.name}
              </Action>
            )}
            {props.variables.length >= 1 &&
              props.variables.map((variable) => (
                <Action Icon={<CompareArrowsIcon htmlColor="magenta" />}>
                  {variable.name}
                </Action>
              ))}
          </>
        );
      }}
    />
  ),

  SubDocument: (props) => (
    <Container
      {...props}
      items={props.block}
      Icon={<FindInPageIcon htmlColor="purple" />}
      title={props.documentName ? props.documentName : props.documentId}
    />
  ),

  CrQuery: (props) => (
    <Node
      {...props}
      title="Content Query"
      titleColor="magenta"
      Content={() => (
        <Action Icon={<DocumentScannerIcon htmlColor="magenta" />}>
          {props.objectRefListVar?.name}
        </Action>
      )}
    />
  ),

  Label: (props) => (
    <Node
      {...props}
      Content={() => (
        <>
          <BdtSidePanelAction>LABEL</BdtSidePanelAction>
          <BdtSidePanelContent>{props.name}</BdtSidePanelContent>
        </>
      )}
      Icon={() => <LocalOfferIcon htmlColor="red" />}
    />
  ),

  Jump: (props) => (
    <Node
      {...props}
      Content={() => (
        <>
          <BdtSidePanelAction>GOTO</BdtSidePanelAction>
          <BdtSidePanelContent>{props.toLabel}</BdtSidePanelContent>
        </>
      )}
      Icon={() => <RedoIcon htmlColor="yellow" />}
    />
  ),

  RecordSetMoveNext: (props) => (
    <Node
      {...props}
      Content={() => (
        <>
          <BdtSidePanelAction>NEXT</BdtSidePanelAction>
          <BdtSidePanelContent>{props.recordSetVar.name}</BdtSidePanelContent>
        </>
      )}
      Icon={() => <AutoStoriesIcon htmlColor="LightSkyBlue" />}
    />
  ),
  Reset: (props) => (
    <Node
      {...props}
      title="Reset"
      titleColor="LightPink"
      Content={() => (
        <Action Icon={<RestartAltIcon htmlColor="LightPink" />}></Action>
      )}
    />
  ),
};
