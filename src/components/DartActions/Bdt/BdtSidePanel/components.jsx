import { Box, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Container from "./Container";
import GavelIcon from "@mui/icons-material/Gavel";
import MergeIcon from "@mui/icons-material/Merge";
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
import KeyIcon from "@mui/icons-material/Key";

const components = {
  Rule: (props) => (
    <Container
      {...props}
      items={props.items}
      Content={() => <BdtSidePanelContent>{props.name}</BdtSidePanelContent>}
      Icon={() => <GavelIcon htmlColor="goldenrod" />}
    />
  ),

  Section: (props) => (
    <Container
      {...props}
      items={props.block}
      Content={() => <BdtSidePanelContent>{props.name}</BdtSidePanelContent>}
      Icon={() => <FolderIcon htmlColor="orange" />}
    />
  ),

  If: (props) => (
    <Container
      {...props}
      items={props.true}
      Content={() => (
        <>
          <BdtSidePanelAction>IF</BdtSidePanelAction>
          <Condition props={props} />
        </>
      )}
      Icon={() => <MergeIcon htmlColor="green" />}
    />
  ),

  InsertTextpiece: (props) => (
    <Container
      {...props}
      Content={() => (
        <>
          <BdtSidePanelAction color={"orange"} fontWeight={700}>
            INSERT
          </BdtSidePanelAction>
          <BdtSidePanelContent>{props.name}</BdtSidePanelContent>
        </>
      )}
      Icon={() => <TextSnippetIcon htmlColor="red" />}
    />
  ),

  DbQuery: (props) => (
    <Container
      {...props}
      Content={() => (
        <>
          <BdtSidePanelAction>READ</BdtSidePanelAction>

          {props.fromTables.map((table) => (
            <BdtSidePanelContent key={uuidv4()}>
              {table.tableName}
            </BdtSidePanelContent>
          ))}

          <BdtSidePanelAction>WHERE</BdtSidePanelAction>
          <Condition props={props} />
        </>
      )}
      Icon={() => <SearchIcon htmlColor="skyblue" />}
    />
  ),

  Assignment: (props) => (
    <Container
      {...props}
      Content={() => <Assignment props={props} />}
      Icon={() => <ArrowRightAltIcon htmlColor="violet" />}
    />
  ),

  GetRSFieldValue: (props) => (
    <Container
      {...props}
      Content={() => (
        <>
          <BdtSidePanelAction>GET</BdtSidePanelAction>
          <BdtSidePanelContent>{props.dbField.name}</BdtSidePanelContent>
          <BdtSidePanelAction>SET</BdtSidePanelAction>
          <BdtSidePanelContent>{props.variable.name}</BdtSidePanelContent>
        </>
      )}
      Icon={() => (
        <ArrowRightAltIcon
          sx={{ transform: "rotate(180deg)" }}
          htmlColor="blue"
        />
      )}
    />
  ),

  ReplaceVariables: (props) => (
    <Container
      {...props}
      Content={() => (
        <BdtSidePanelContent>Replace Variables</BdtSidePanelContent>
      )}
      Icon={() => <CompareArrowsIcon htmlColor="purple" />}
    />
  ),

  SubDocument: (props) => (
    <Container
      {...props}
      items={props.block}
      Content={() => (
        <>
          <BdtSidePanelAction>INCLUDE</BdtSidePanelAction>
          <BdtSidePanelContent>
            {props.documentName ? props.documentName : props.documentId}
          </BdtSidePanelContent>
        </>
      )}
      Icon={() => <FindInPageIcon htmlColor="purple" />}
    />
  ),

  Define: (props) => (
    <Container
      {...props}
      Content={() => (
        <>
          <BdtSidePanelAction>DEFINE</BdtSidePanelAction>
        </>
      )}
      Icon={() => <KeyIcon htmlColor="goldenrod" />}
    />
  ),

  CrQuery: (props) => (
    <Container
      {...props}
      Content={() => <BdtSidePanelContent>CrQuery</BdtSidePanelContent>}
      Icon={() => <DocumentScannerIcon htmlColor="magenta" />}
    />
  ),

  Label: (props) => (
    <Container
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
    <Container
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
    <Container
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
    <Container
      {...props}
      Content={() => (
        <>
          <BdtSidePanelAction>Reset</BdtSidePanelAction>
          <BdtSidePanelContent>{console.log(props)}</BdtSidePanelContent>
        </>
      )}
      Icon={() => <RestartAltIcon htmlColor="LightPink" />}
    />
  ),
};

export function render(obj, onClick = () => {}) {
  const render = components[Object.keys(obj)[0]];

  if (!render) {
    return <Typography>{Object.keys(obj)[0]}</Typography>;
  }

  const props = obj[Object.keys(obj)[0]];

  props.onSequenceClick = onClick;

  return render(props);
}
