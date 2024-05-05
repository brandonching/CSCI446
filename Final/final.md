# DR1082: Switching to TailwindCSS for CSS Framework

**Status:** proposed

**Date:** May 4, 2024

**Summary:** Proposing the adoption of TailwindCSS as our primary CSS framework to enhance flexibility and maintainability in frontend development. This decision is based on the need for greater customization options and design flexibility to align with evolving project requirements. Currently using Bulma CSS, the team recognizes the benefits of TailwindCSS but acknowledges the initial learning curve and adjustment period required for the transition.

**Authors:**

- Team Lead: [Brandon Ching](mailto:bching@mines.edu)
- Overlord: [Jeffery Bezos](mailto:jeff@amazon.com)
- Lizard Developer: [Mark Zuckerberg](mailto:getzucked@facebook.com)
- Alien Designer: [Elon Musk](mailto:rocketman@spacex.com)

## Issue

The current CSS framework (Bulma) lacks flexibility for customization, hindering our ability to adapt to evolving design requirements efficiently. The team currently has to build a lot of custom components and styles to meet the design requirements, which is time-consuming and leads to inconsistencies across projects.

## Assumptions

1. Team members have a solid understanding of CSS fundamentals.
2. Adoption of a new CSS framework will require initial training and adjustment period.
3. Transitioning to TailwindCSS will improve development efficiency and design consistency.

## Constraints

1. Limited resources for extensive training and onboarding.
2. Need to ensure backward compatibility with existing projects during the transition phase.

## Positions

1. **[Bulma CSS](https://bulma.io/documentation/):** Currently used by the team, familiar and proven in past projects.
2. **[TailwindCSS](https://tailwindcss.com/docs/installation):** Offers a utility-first approach for customization and faster development.

### Cost analysis

- Bulma: Open-source and free. Low setup cost due to familiarity but ongoing maintenance and customization efforts may be high.
- TailwindCSS: Paid license. Large library of pre-built components and utility classes, potentially reducing development time and maintenance costs.

### SWOT analysis

- **Strengths:** Bulma - Familiarity; TailwindCSS - Flexibility and customization.
- **Weaknesses:** Bulma - Limited customization; TailwindCSS - Learning curve.
- **Opportunities:** Improve design consistency and development efficiency.
- **Threats:** Resistance to change from team members accustomed to Bulma.

## Opinions

### Team Opinion

The majority of the team acknowledges the benefits of TailwindCSS but expresses concerns about the learning curve and initial adjustment period. However, they are open to exploring the switch for long-term gains in efficiency.

### UI/UX Designer Opinion

Supports the switch to TailwindCSS for its flexibility in design customization, believing it will streamline the implementation of complex design elements. Almost all of the custom design elements not currently present in Bulma which are used in existing projects are available in TailwindCSS.

## Argument

TailwindCSS offers greater flexibility and customization options compared to Bulma, aligning with our goal of delivering high-quality and adaptable frontend solutions. Despite the initial learning curve, the long-term benefits outweigh the short-term challenges.

## Implications

- Initial training and adjustment period required for team members.
- Potential improvements in development efficiency and design consistency.
- Need for backward compatibility during transition phase.
- Potential need to update existing projects to align with TailwindCSS conventions.

## Related decisions

None.

## Related requirements

None.

## Related artifacts

None.

## Related principles

Ensure alignment with principles of adaptability and efficiency in technology selection.

## Related notes

Other frameworks considered:

1. [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
    Bootstrap was not chosen due to its more opinionated design and less flexibility compared to TailwindCSS.
2. [Foundation](https://get.foundation/sites/docs/)
    Foundation was not chosen due to its complexity and steeper learning curve compared to TailwindCSS.
3. [Materialize](https://materializecss.com/)
    Materialize was not chosen due to its limited customization options and less active community support compared to TailwindCSS.
