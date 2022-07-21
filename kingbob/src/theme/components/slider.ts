import { mode } from "@chakra-ui/theme-tools";
export const sliderStyles = {
  components: {
    RangeSlider: {
      // baseStyle: {
      //   thumb: {
      //     fontWeight: 400,
      //   },
      //   track: {
      //     display: "flex",
      //   },
      // },

      variants: {
        main: (props: any) => ({
          thumb: {
            bg: mode("brand.500", "brand.400")(props),
          },
        }),
      },
    },
  },
};
