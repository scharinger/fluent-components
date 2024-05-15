import React from "react";
import { StoryPage } from "../../components/story/story-page";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import { IllustrationPageHeader } from "./components/illustration-page-header";
import { useIllustrationPage } from "./illustration-page.hooks";
import { EStoryStatus } from "../../components/story/story-status";
import { useExampleWithNavigation } from "../../components/story/story.utils";
import { IllustrationList } from "./examples/illustration-list";
import {
  BundleIllustration,
  BundleIllustrationExampleAsString,
} from "./examples/bundle-illustration";

export const IllustrationPage = (): JSX.Element => {
  const gh = getGhInfoByKey(routes.Illustrations);

  const {
    search,
    filteredIllustrations,
    onSearchQueryChanged,
    filterByVariant,
  } = useIllustrationPage();

  const { renderSections, renderNavigation } = useExampleWithNavigation(
    [{
      title: "IllustrationList",
      anchor: "IllustrationList",
      example: <IllustrationList illustrations={filteredIllustrations} />,
    }, {
      title: "BundleIllustration",
      anchor: "BundleIllustration",
      example: <BundleIllustration />,
      codeString: BundleIllustrationExampleAsString,
    }]
  );
  return (
    <StoryPage
      title="Illustrations"
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      description={"Axis branded illustrations"}
      status={[EStoryStatus.NEW]}
      navigation={renderNavigation}
      customHeader={
        <IllustrationPageHeader
          search={search}
          onSearchQueryChanged={onSearchQueryChanged}
          filterByVariant={filterByVariant}
        />
      }
    >
      {renderSections}
    </StoryPage>
  );
};
