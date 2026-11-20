#!/usr/bin/env wolframscript
(* Writes data/letterlike-long-names.json, a list of every long name (\[Name])
   whose category in CodeParser's LongNames.wl is LetterlikeCharacter. Long
   names in that category are valid anywhere in a symbol name; long names in
   other categories are operators, whitespace or raw characters.

   Argument: CodeParser/Data/LongNames.wl from a checkout of
   https://github.com/WolframResearch/codeparser. *)

usage[] := (
  Print["Usage: wolframscript -file letterlike-long-names.wls <codeparser>/CodeParser/Data/LongNames.wl"];
  Exit[1]
);

If[Length[$ScriptCommandLine] != 2 || !FileExistsQ[$ScriptCommandLine[[2]]], usage[]];

(* LongNames.wl holds an Association of name -> {category, codepoint, data} *)
longNames = Get[$ScriptCommandLine[[2]]];
If[!AssociationQ[longNames], usage[]];

letterlike = Keys @ Select[longNames, First[#] === LetterlikeCharacter &];

outFile = FileNameJoin[{DirectoryName[$InputFileName, 2], "data", "letterlike-long-names.json"}];
(* WriteString rather than Export, so the file ends in a newline *)
WriteString[outFile, ExportString[letterlike, "RawJSON", "Compact" -> 1], "\n"];
Close[outFile];
