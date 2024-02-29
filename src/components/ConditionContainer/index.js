import React from "react";
import "./index.css";

export default function ConditionContainer() {
  return (
    // <div className="conditionContainer">
    //   <ul className="conditionListContainer">
    //     <li className="conditionListContainerItem">
    //       * Any personal insurance you may have that covers damage to the host’s
    //       vehicle would kick in before your protection plan, except in limited
    //       situations for trips booked in Maryland, but this protects your own
    //       wallet. Liability insurance is provided under a policy issued to Turo
    //       by Travelers Excess and Surplus Lines Company. Terms, conditions, and
    //       exclusions apply. The policy does not provide coverage for damage to a
    //       host’s vehicle.
    //     </li>
    //     <li className="conditionListContainerItem">
    //       For questions or information about the third party liability insurance
    //       that is included in protection plans in the US, consumers in Maryland
    //       and the licensed states listed here may contact Turo Insurance Agency
    //       at (415) 508-0283 or claims@turo.agency. For questions about how
    //       damage to a host’s vehicle is handled, visit the Turo Support site.
    //     </li>
    //     <li className="conditionListContainerItem">
    //       When a trip is booked in the state of Washington, physical damage to
    //       the host’s vehicle is covered by insurance purchased by Turo, but the
    //       Turo insurance does not change the contractual responsibilities of
    //       hosts or guests with respect to physical damage to a host’s vehicle.
    //     </li>
    //     <li className="conditionListContainerItem">
    //       ** Terms, conditions, and exclusions apply.
    //     </li>
    //   </ul>
    // </div>
    <div className="conditionContainer">
      <div className="conditionMainContainer">
        <p className="conditionItem">
          * Any personal insurance you may have that covers damage to the host’s
          vehicle would kick in before your protection plan, except in limited
          situations for trips booked in Maryland, but this protects your own
          wallet. Liability insurance is provided under a policy issued to Turo
          by Travelers Excess and Surplus Lines Company. Terms, conditions, and
          exclusions apply. The policy does not provide coverage for damage to a
          host’s vehicle.
        </p>
        <p className="conditionItem">
          For questions or information about the third party liability insurance
          for trips in the US, consumers in Maryland and the licensed states
          listed <span className="highlight">here</span> may contact Turo Insurance Agency at (415)
          508-0283 or claims@turo.agency. For questions about how damage to a
          host’s vehicle is handled, visit the{" "}
          <span className="highlight">Turo Support</span> site.
        </p>
        <p className="conditionItem">
          When a trip is booked in the state of Washington, physical damage to
          the host’s vehicle is covered by insurance purchased by Turo, but the
          Turo insurance does not change the contractual responsibilities of
          hosts or guests with respect to physical damage to a host’s vehicle.
        </p>
        <p className="conditionItem">
          ** Terms, conditions, and exclusions apply.
        </p>
        <p className="conditionItem">
          *** Review the{" "}
          <span className="highlight">Guest Product Disclosure Statement </span>{" "}
          for more information.
        </p>
      </div>
    </div>
  );
}
