import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div style={{marginLeft:'5%'}}>
        <svg width="1440" height="1024" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1440" height="1024" fill="white"/>
        <path d="M323.08 445.792C323.848 446.304 324.296 446.976 324.424 447.808C324.552 448.576 324.36 449.344 323.848 450.112C323.4 450.688 322.824 451.008 322.12 451.072C321.416 451.136 320.744 451.008 320.104 450.688C317.672 449.088 315.048 447.84 312.232 446.944C309.48 446.048 306.504 445.6 303.304 445.6C299.4 445.6 295.752 446.304 292.36 447.712C289.032 449.056 286.12 451.04 283.624 453.664C281.128 456.224 279.176 459.264 277.768 462.784C276.424 466.304 275.752 470.176 275.752 474.4C275.752 478.752 276.456 482.72 277.864 486.304C279.272 489.824 281.224 492.864 283.72 495.424C286.28 497.984 289.224 499.936 292.552 501.28C295.88 502.624 299.464 503.296 303.304 503.296C306.44 503.296 309.384 502.848 312.136 501.952C314.952 501.056 317.576 499.84 320.008 498.304C320.648 497.92 321.32 497.792 322.024 497.92C322.792 497.984 323.4 498.336 323.848 498.976C324.424 499.68 324.616 500.448 324.424 501.28C324.296 502.048 323.88 502.656 323.176 503.104C321.576 504.128 319.688 505.088 317.512 505.984C315.336 506.88 313.032 507.584 310.6 508.096C308.168 508.672 305.736 508.96 303.304 508.96C298.696 508.96 294.376 508.128 290.344 506.464C286.312 504.8 282.728 502.464 279.592 499.456C276.456 496.384 273.992 492.736 272.2 488.512C270.472 484.288 269.608 479.584 269.608 474.4C269.608 469.408 270.472 464.832 272.2 460.672C273.928 456.448 276.328 452.8 279.4 449.728C282.472 446.656 286.056 444.256 290.152 442.528C294.248 440.8 298.632 439.936 303.304 439.936C306.952 439.936 310.472 440.448 313.864 441.472C317.256 442.496 320.328 443.936 323.08 445.792ZM422.897 474.4C422.897 479.456 422.097 484.096 420.497 488.32C418.961 492.48 416.753 496.128 413.873 499.264C410.993 502.336 407.569 504.736 403.601 506.464C399.697 508.128 395.409 508.96 390.737 508.96C386.065 508.96 381.745 508.128 377.777 506.464C373.873 504.736 370.481 502.336 367.601 499.264C364.721 496.128 362.481 492.48 360.881 488.32C359.345 484.096 358.577 479.456 358.577 474.4C358.577 469.344 359.345 464.736 360.881 460.576C362.481 456.352 364.721 452.704 367.601 449.632C370.481 446.496 373.873 444.096 377.777 442.432C381.745 440.704 386.065 439.84 390.737 439.84C395.409 439.84 399.697 440.704 403.601 442.432C407.569 444.096 410.993 446.496 413.873 449.632C416.753 452.704 418.961 456.352 420.497 460.576C422.097 464.736 422.897 469.344 422.897 474.4ZM416.753 474.4C416.753 468.704 415.633 463.712 413.393 459.424C411.217 455.072 408.177 451.68 404.273 449.248C400.369 446.816 395.857 445.6 390.737 445.6C385.681 445.6 381.169 446.816 377.201 449.248C373.297 451.68 370.225 455.072 367.985 459.424C365.809 463.712 364.721 468.704 364.721 474.4C364.721 480.096 365.809 485.12 367.985 489.472C370.225 493.76 373.297 497.12 377.201 499.552C381.169 501.984 385.681 503.2 390.737 503.2C395.857 503.2 400.369 501.984 404.273 499.552C408.177 497.12 411.217 493.76 413.393 489.472C415.633 485.12 416.753 480.096 416.753 474.4ZM465.623 440.8C466.071 440.8 466.519 440.896 466.967 441.088C467.479 441.28 467.895 441.6 468.215 442.048L494.711 481.792L492.119 481.696L518.711 442.048C519.415 441.088 520.279 440.672 521.303 440.8C522.071 440.8 522.711 441.088 523.223 441.664C523.799 442.176 524.087 442.848 524.087 443.68V505.12C524.087 505.888 523.799 506.56 523.223 507.136C522.647 507.712 521.943 508 521.111 508C520.215 508 519.479 507.712 518.903 507.136C518.327 506.56 518.039 505.888 518.039 505.12V449.536L519.767 449.728L495.479 486.496C495.287 486.88 494.999 487.2 494.615 487.456C494.231 487.648 493.783 487.712 493.271 487.648C492.823 487.712 492.375 487.648 491.927 487.456C491.543 487.2 491.223 486.88 490.967 486.496L466.583 449.344L468.407 448.096V505.12C468.407 505.888 468.119 506.56 467.543 507.136C467.031 507.712 466.359 508 465.527 508C464.695 508 464.023 507.712 463.511 507.136C462.999 506.56 462.743 505.888 462.743 505.12V443.68C462.743 442.912 462.999 442.24 463.511 441.664C464.087 441.088 464.791 440.8 465.623 440.8ZM574.447 505.024C574.383 505.856 574.031 506.56 573.391 507.136C572.815 507.712 572.143 508 571.375 508C570.479 508 569.743 507.712 569.167 507.136C568.655 506.56 568.399 505.856 568.399 505.024V443.776C568.399 442.944 568.687 442.24 569.263 441.664C569.839 441.088 570.575 440.8 571.471 440.8C572.239 440.8 572.911 441.088 573.487 441.664C574.127 442.24 574.447 442.944 574.447 443.776V505.024ZM667.801 440.8C668.633 440.8 669.273 441.056 669.721 441.568C670.233 442.08 670.489 442.72 670.489 443.488V504.928C670.489 505.888 670.169 506.656 669.529 507.232C668.953 507.744 668.281 508 667.513 508C667.129 508 666.713 507.936 666.265 507.808C665.817 507.616 665.465 507.36 665.209 507.04L622.393 449.344L624.025 448.48V505.408C624.025 506.112 623.769 506.72 623.257 507.232C622.745 507.744 622.105 508 621.337 508C620.505 508 619.833 507.744 619.321 507.232C618.873 506.72 618.649 506.112 618.649 505.408V443.68C618.649 442.72 618.937 442.016 619.513 441.568C620.089 441.056 620.729 440.8 621.433 440.8C621.817 440.8 622.233 440.896 622.681 441.088C623.129 441.216 623.481 441.472 623.737 441.856L666.073 498.88L665.113 500.608V443.488C665.113 442.72 665.369 442.08 665.881 441.568C666.457 441.056 667.097 440.8 667.801 440.8ZM744.887 508.96C739.959 508.96 735.383 508.096 731.159 506.368C726.935 504.64 723.255 502.24 720.119 499.168C717.047 496.032 714.647 492.352 712.919 488.128C711.191 483.904 710.327 479.328 710.327 474.4C710.327 469.472 711.191 464.896 712.919 460.672C714.647 456.448 717.047 452.8 720.119 449.728C723.255 446.592 726.935 444.16 731.159 442.432C735.383 440.704 739.959 439.84 744.887 439.84C748.279 439.84 751.543 440.256 754.679 441.088C757.879 441.856 760.727 443.04 763.223 444.64C763.671 444.96 763.991 445.344 764.183 445.792C764.439 446.176 764.567 446.592 764.567 447.04C764.567 447.936 764.279 448.672 763.703 449.248C763.127 449.76 762.519 450.016 761.879 450.016C761.559 450.016 761.239 449.984 760.919 449.92C760.663 449.792 760.407 449.664 760.151 449.536C757.975 448.32 755.607 447.36 753.047 446.656C750.487 445.952 747.767 445.6 744.887 445.6C739.383 445.6 734.487 446.848 730.199 449.344C725.911 451.84 722.551 455.264 720.119 459.616C717.687 463.968 716.471 468.896 716.471 474.4C716.471 479.904 717.687 484.832 720.119 489.184C722.551 493.536 725.911 496.96 730.199 499.456C734.487 501.952 739.383 503.2 744.887 503.2C747.767 503.2 750.647 502.784 753.527 501.952C756.471 501.12 758.999 500 761.111 498.592L760.631 500.608V478.528L762.071 479.872H745.463C744.631 479.872 743.927 479.584 743.351 479.008C742.775 478.432 742.487 477.76 742.487 476.992C742.487 476.096 742.775 475.392 743.351 474.88C743.927 474.368 744.631 474.112 745.463 474.112H763.799C764.631 474.112 765.303 474.4 765.815 474.976C766.391 475.488 766.679 476.16 766.679 476.992V500.128C766.679 500.64 766.551 501.12 766.295 501.568C766.039 502.016 765.687 502.4 765.239 502.72C762.423 504.64 759.255 506.176 755.735 507.328C752.279 508.416 748.663 508.96 744.887 508.96ZM852.521 508.96C847.657 509.024 843.433 508.256 839.849 506.656C836.265 505.056 832.841 502.656 829.577 499.456C829.257 499.2 828.969 498.88 828.713 498.496C828.521 498.112 828.425 497.664 828.425 497.152C828.425 496.384 828.713 495.68 829.289 495.04C829.929 494.4 830.633 494.08 831.401 494.08C832.169 494.08 832.873 494.4 833.513 495.04C836.009 497.728 838.825 499.776 841.961 501.184C845.161 502.592 848.585 503.296 852.233 503.296C855.305 503.296 858.025 502.816 860.393 501.856C862.825 500.896 864.745 499.52 866.153 497.728C867.561 495.936 868.265 493.856 868.265 491.488C868.265 488.544 867.465 486.176 865.865 484.384C864.265 482.528 862.153 481.024 859.529 479.872C856.905 478.656 853.993 477.568 850.793 476.608C848.169 475.84 845.673 474.976 843.305 474.016C840.937 472.992 838.825 471.776 836.969 470.368C835.113 468.896 833.673 467.104 832.649 464.992C831.625 462.88 831.113 460.32 831.113 457.312C831.113 453.92 832.009 450.912 833.801 448.288C835.593 445.664 838.121 443.616 841.385 442.144C844.713 440.608 848.553 439.84 852.905 439.84C856.681 439.84 860.297 440.48 863.753 441.76C867.273 443.04 870.057 444.928 872.105 447.424C873.065 448.448 873.545 449.376 873.545 450.208C873.545 450.848 873.225 451.488 872.585 452.128C871.945 452.768 871.241 453.088 870.473 453.088C869.833 453.088 869.289 452.864 868.841 452.416C867.753 451.072 866.377 449.888 864.713 448.864C863.049 447.776 861.193 446.944 859.145 446.368C857.161 445.792 855.081 445.504 852.905 445.504C849.897 445.504 847.177 445.984 844.745 446.944C842.377 447.84 840.489 449.152 839.081 450.88C837.737 452.608 837.065 454.688 837.065 457.12C837.065 459.808 837.833 462.016 839.369 463.744C840.905 465.472 842.921 466.912 845.417 468.064C847.913 469.152 850.569 470.176 853.385 471.136C856.137 471.904 858.761 472.8 861.257 473.824C863.817 474.784 866.057 476 867.977 477.472C869.961 478.944 871.497 480.8 872.585 483.04C873.737 485.28 874.313 488.096 874.313 491.488C874.313 494.752 873.385 497.696 871.529 500.32C869.673 502.944 867.113 505.024 863.849 506.56C860.649 508.096 856.873 508.896 852.521 508.96ZM974.053 474.4C974.053 479.456 973.253 484.096 971.653 488.32C970.117 492.48 967.909 496.128 965.029 499.264C962.149 502.336 958.725 504.736 954.757 506.464C950.853 508.128 946.565 508.96 941.893 508.96C937.221 508.96 932.901 508.128 928.933 506.464C925.029 504.736 921.637 502.336 918.757 499.264C915.877 496.128 913.637 492.48 912.037 488.32C910.501 484.096 909.733 479.456 909.733 474.4C909.733 469.344 910.501 464.736 912.037 460.576C913.637 456.352 915.877 452.704 918.757 449.632C921.637 446.496 925.029 444.096 928.933 442.432C932.901 440.704 937.221 439.84 941.893 439.84C946.565 439.84 950.853 440.704 954.757 442.432C958.725 444.096 962.149 446.496 965.029 449.632C967.909 452.704 970.117 456.352 971.653 460.576C973.253 464.736 974.053 469.344 974.053 474.4ZM967.909 474.4C967.909 468.704 966.789 463.712 964.549 459.424C962.373 455.072 959.333 451.68 955.429 449.248C951.525 446.816 947.013 445.6 941.893 445.6C936.837 445.6 932.325 446.816 928.357 449.248C924.453 451.68 921.381 455.072 919.141 459.424C916.965 463.712 915.877 468.704 915.877 474.4C915.877 480.096 916.965 485.12 919.141 489.472C921.381 493.76 924.453 497.12 928.357 499.552C932.325 501.984 936.837 503.2 941.893 503.2C947.013 503.2 951.525 501.984 955.429 499.552C959.333 497.12 962.373 493.76 964.549 489.472C966.789 485.12 967.909 480.096 967.909 474.4ZM1073.8 474.4C1073.8 479.456 1073 484.096 1071.4 488.32C1069.87 492.48 1067.66 496.128 1064.78 499.264C1061.9 502.336 1058.48 504.736 1054.51 506.464C1050.6 508.128 1046.32 508.96 1041.64 508.96C1036.97 508.96 1032.65 508.128 1028.68 506.464C1024.78 504.736 1021.39 502.336 1018.51 499.264C1015.63 496.128 1013.39 492.48 1011.79 488.32C1010.25 484.096 1009.48 479.456 1009.48 474.4C1009.48 469.344 1010.25 464.736 1011.79 460.576C1013.39 456.352 1015.63 452.704 1018.51 449.632C1021.39 446.496 1024.78 444.096 1028.68 442.432C1032.65 440.704 1036.97 439.84 1041.64 439.84C1046.32 439.84 1050.6 440.704 1054.51 442.432C1058.48 444.096 1061.9 446.496 1064.78 449.632C1067.66 452.704 1069.87 456.352 1071.4 460.576C1073 464.736 1073.8 469.344 1073.8 474.4ZM1067.66 474.4C1067.66 468.704 1066.54 463.712 1064.3 459.424C1062.12 455.072 1059.08 451.68 1055.18 449.248C1051.28 446.816 1046.76 445.6 1041.64 445.6C1036.59 445.6 1032.08 446.816 1028.11 449.248C1024.2 451.68 1021.13 455.072 1018.89 459.424C1016.72 463.712 1015.63 468.704 1015.63 474.4C1015.63 480.096 1016.72 485.12 1018.89 489.472C1021.13 493.76 1024.2 497.12 1028.11 499.552C1032.08 501.984 1036.59 503.2 1041.64 503.2C1046.76 503.2 1051.28 501.984 1055.18 499.552C1059.08 497.12 1062.12 493.76 1064.3 489.472C1066.54 485.12 1067.66 480.096 1067.66 474.4ZM1162.8 440.8C1163.63 440.8 1164.27 441.056 1164.72 441.568C1165.23 442.08 1165.49 442.72 1165.49 443.488V504.928C1165.49 505.888 1165.17 506.656 1164.53 507.232C1163.95 507.744 1163.28 508 1162.51 508C1162.13 508 1161.71 507.936 1161.27 507.808C1160.82 507.616 1160.47 507.36 1160.21 507.04L1117.39 449.344L1119.03 448.48V505.408C1119.03 506.112 1118.77 506.72 1118.26 507.232C1117.75 507.744 1117.11 508 1116.34 508C1115.51 508 1114.83 507.744 1114.32 507.232C1113.87 506.72 1113.65 506.112 1113.65 505.408V443.68C1113.65 442.72 1113.94 442.016 1114.51 441.568C1115.09 441.056 1115.73 440.8 1116.43 440.8C1116.82 440.8 1117.23 440.896 1117.68 441.088C1118.13 441.216 1118.48 441.472 1118.74 441.856L1161.07 498.88L1160.11 500.608V443.488C1160.11 442.72 1160.37 442.08 1160.88 441.568C1161.46 441.056 1162.1 440.8 1162.8 440.8Z" fill="black"/>
        <rect x="455.5" y="555.5" width="508" height="25" rx="8.5" stroke="black" stroke-width="3"/>
        <rect x="459" y="559" width="491" height="17" rx="8.5" fill="#70B944"/>
        <path d="M725.54 609.78C726.327 609.78 727.007 609.92 727.58 610.2C728.167 610.48 728.647 610.86 729.02 611.34C729.393 611.807 729.673 612.34 729.86 612.94C730.047 613.54 730.14 614.153 730.14 614.78C730.14 615.42 730.053 616.107 729.88 616.84C729.72 617.56 729.473 618.293 729.14 619.04C728.82 619.773 728.413 620.473 727.92 621.14C727.44 621.807 726.873 622.407 726.22 622.94C725.567 623.473 724.84 623.887 724.04 624.18C723.933 624.207 723.847 624.22 723.78 624.22C723.62 624.22 723.473 624.16 723.34 624.04C723.22 623.933 723.16 623.787 723.16 623.6C723.16 623.467 723.2 623.353 723.28 623.26C723.36 623.153 723.48 623.073 723.64 623.02C724.4 622.7 725.133 622.227 725.84 621.6C726.547 620.96 727.153 620.227 727.66 619.4C728.18 618.56 728.527 617.693 728.7 616.8L729.12 616.54C728.893 616.967 728.587 617.353 728.2 617.7C727.813 618.047 727.373 618.32 726.88 618.52C726.4 618.707 725.873 618.8 725.3 618.8C724.447 618.8 723.707 618.593 723.08 618.18C722.467 617.753 721.993 617.193 721.66 616.5C721.327 615.807 721.16 615.06 721.16 614.26C721.16 613.473 721.347 612.74 721.72 612.06C722.107 611.38 722.627 610.833 723.28 610.42C723.947 609.993 724.7 609.78 725.54 609.78ZM725.58 610.94C724.953 610.94 724.4 611.08 723.92 611.36C723.44 611.64 723.06 612.033 722.78 612.54C722.513 613.033 722.38 613.607 722.38 614.26C722.38 614.847 722.493 615.4 722.72 615.92C722.96 616.44 723.313 616.86 723.78 617.18C724.247 617.487 724.813 617.64 725.48 617.64C726.2 617.64 726.813 617.487 727.32 617.18C727.827 616.86 728.22 616.44 728.5 615.92C728.78 615.4 728.92 614.827 728.92 614.2C728.92 613.627 728.787 613.093 728.52 612.6C728.253 612.107 727.873 611.707 727.38 611.4C726.887 611.093 726.287 610.94 725.58 610.94ZM736.692 609.78C737.479 609.78 738.159 609.92 738.732 610.2C739.319 610.48 739.799 610.86 740.172 611.34C740.546 611.807 740.826 612.34 741.012 612.94C741.199 613.54 741.292 614.153 741.292 614.78C741.292 615.42 741.206 616.107 741.032 616.84C740.872 617.56 740.626 618.293 740.292 619.04C739.972 619.773 739.566 620.473 739.072 621.14C738.592 621.807 738.026 622.407 737.372 622.94C736.719 623.473 735.992 623.887 735.192 624.18C735.086 624.207 734.999 624.22 734.932 624.22C734.772 624.22 734.626 624.16 734.492 624.04C734.372 623.933 734.312 623.787 734.312 623.6C734.312 623.467 734.352 623.353 734.432 623.26C734.512 623.153 734.632 623.073 734.792 623.02C735.552 622.7 736.286 622.227 736.992 621.6C737.699 620.96 738.306 620.227 738.812 619.4C739.332 618.56 739.679 617.693 739.852 616.8L740.272 616.54C740.046 616.967 739.739 617.353 739.352 617.7C738.966 618.047 738.526 618.32 738.032 618.52C737.552 618.707 737.026 618.8 736.452 618.8C735.599 618.8 734.859 618.593 734.232 618.18C733.619 617.753 733.146 617.193 732.812 616.5C732.479 615.807 732.312 615.06 732.312 614.26C732.312 613.473 732.499 612.74 732.872 612.06C733.259 611.38 733.779 610.833 734.432 610.42C735.099 609.993 735.852 609.78 736.692 609.78ZM736.732 610.94C736.106 610.94 735.552 611.08 735.072 611.36C734.592 611.64 734.212 612.033 733.932 612.54C733.666 613.033 733.532 613.607 733.532 614.26C733.532 614.847 733.646 615.4 733.872 615.92C734.112 616.44 734.466 616.86 734.932 617.18C735.399 617.487 735.966 617.64 736.632 617.64C737.352 617.64 737.966 617.487 738.472 617.18C738.979 616.86 739.372 616.44 739.652 615.92C739.932 615.4 740.072 614.827 740.072 614.2C740.072 613.627 739.939 613.093 739.672 612.6C739.406 612.107 739.026 611.707 738.532 611.4C738.039 611.093 737.439 610.94 736.732 610.94ZM745.925 617.14C745.325 617.14 744.825 616.973 744.425 616.64C744.025 616.307 743.718 615.867 743.505 615.32C743.305 614.76 743.205 614.16 743.205 613.52C743.205 612.853 743.305 612.24 743.505 611.68C743.718 611.12 744.031 610.673 744.445 610.34C744.858 610.007 745.365 609.84 745.965 609.84C746.565 609.84 747.065 610.007 747.465 610.34C747.878 610.673 748.185 611.12 748.385 611.68C748.598 612.24 748.705 612.847 748.705 613.5C748.705 614.14 748.598 614.74 748.385 615.3C748.171 615.86 747.858 616.307 747.445 616.64C747.045 616.973 746.538 617.14 745.925 617.14ZM745.965 616.1C746.538 616.1 746.945 615.853 747.185 615.36C747.438 614.867 747.565 614.253 747.565 613.52C747.565 612.747 747.425 612.113 747.145 611.62C746.878 611.127 746.471 610.88 745.925 610.88C745.365 610.88 744.958 611.133 744.705 611.64C744.465 612.147 744.345 612.767 744.345 613.5C744.345 614.26 744.478 614.887 744.745 615.38C745.025 615.86 745.431 616.1 745.965 616.1ZM754.165 624.16C753.578 624.16 753.078 623.993 752.665 623.66C752.251 623.327 751.938 622.887 751.725 622.34C751.525 621.78 751.425 621.18 751.425 620.54C751.425 619.873 751.531 619.26 751.745 618.7C751.958 618.14 752.271 617.693 752.685 617.36C753.098 617.027 753.605 616.86 754.205 616.86C754.805 616.86 755.305 617.027 755.705 617.36C756.118 617.693 756.425 618.14 756.625 618.7C756.825 619.26 756.925 619.867 756.925 620.52C756.925 621.16 756.818 621.76 756.605 622.32C756.391 622.88 756.078 623.327 755.665 623.66C755.265 623.993 754.765 624.16 754.165 624.16ZM754.205 623.12C754.765 623.12 755.171 622.873 755.425 622.38C755.678 621.887 755.805 621.273 755.805 620.54C755.805 619.767 755.665 619.133 755.385 618.64C755.118 618.147 754.711 617.9 754.165 617.9C753.605 617.9 753.198 618.153 752.945 618.66C752.691 619.167 752.565 619.787 752.565 620.52C752.565 621.28 752.705 621.907 752.985 622.4C753.265 622.88 753.671 623.12 754.205 623.12ZM745.705 624.06C745.558 624.06 745.425 624.013 745.305 623.92C745.198 623.813 745.145 623.68 745.145 623.52C745.145 623.413 745.178 623.307 745.245 623.2L753.805 610.2C753.925 610.027 754.071 609.94 754.245 609.94C754.391 609.94 754.518 609.987 754.625 610.08C754.745 610.173 754.805 610.307 754.805 610.48C754.805 610.573 754.771 610.68 754.705 610.8L746.145 623.8C746.025 623.973 745.878 624.06 745.705 624.06Z" fill="black"/>
        <g clip-path="url(#clip0_95_10)">
        <path d="M650.276 343.748C650.276 345.571 649.837 347.55 648.957 349.685C648.102 351.795 646.745 353.878 644.885 355.935C643.025 357.966 640.649 359.62 637.759 360.896C634.868 362.172 631.5 362.81 627.654 362.81C624.738 362.81 622.086 362.524 619.698 361.951C617.31 361.378 615.136 360.492 613.175 359.295C611.24 358.071 609.455 356.469 607.821 354.49C606.363 352.693 605.119 350.688 604.089 348.474C603.058 346.235 602.279 343.852 601.751 341.326C601.248 338.8 600.997 336.118 600.997 333.279C600.997 328.67 601.638 324.542 602.92 320.896C604.227 317.25 606.087 314.138 608.5 311.56C610.913 308.956 613.741 306.977 616.984 305.623C620.226 304.269 623.682 303.592 627.352 303.592C631.827 303.592 635.811 304.516 639.304 306.365C642.799 308.214 645.475 310.506 647.336 313.24C649.196 315.948 650.125 318.514 650.125 320.935C650.125 322.264 649.673 323.435 648.768 324.451C647.863 325.466 646.77 325.974 645.488 325.974C644.055 325.974 642.974 325.623 642.245 324.92C641.541 324.216 640.75 323.006 639.87 321.287C638.412 318.448 636.69 316.326 634.705 314.92C632.744 313.514 630.318 312.81 627.427 312.81C622.828 312.81 619.158 314.62 616.418 318.24C613.703 321.86 612.346 327.003 612.346 333.67C612.346 338.123 612.949 341.834 614.156 344.802C615.362 347.745 617.072 349.946 619.284 351.404C621.496 352.862 624.085 353.592 627.051 353.592C630.268 353.592 632.983 352.771 635.195 351.131C637.432 349.464 639.116 347.029 640.247 343.826C640.725 342.316 641.315 341.092 642.019 340.154C642.723 339.19 643.854 338.709 645.412 338.709C646.745 338.709 647.888 339.19 648.844 340.154C649.799 341.118 650.276 342.316 650.276 343.748ZM698.161 341.131C698.161 344.308 697.684 347.237 696.728 349.92C695.773 352.602 694.391 354.907 692.581 356.834C690.771 358.761 688.609 360.245 686.096 361.287C683.582 362.302 680.754 362.81 677.612 362.81C674.495 362.81 671.693 362.29 669.204 361.248C666.715 360.206 664.554 358.722 662.719 356.795C660.909 354.842 659.526 352.55 658.571 349.92C657.642 347.264 657.176 344.334 657.176 341.131C657.176 337.902 657.654 334.946 658.609 332.264C659.564 329.581 660.934 327.29 662.719 325.388C664.504 323.487 666.665 322.029 669.204 321.014C671.743 319.972 674.545 319.451 677.612 319.451C680.729 319.451 683.557 319.972 686.096 321.014C688.634 322.055 690.809 323.54 692.618 325.466C694.428 327.394 695.798 329.685 696.728 332.342C697.684 334.998 698.161 337.928 698.161 341.131ZM687.83 341.131C687.83 336.782 686.9 333.396 685.04 330.974C683.205 328.552 680.729 327.342 677.612 327.342C675.601 327.342 673.829 327.888 672.296 328.982C670.762 330.05 669.581 331.638 668.752 333.748C667.922 335.857 667.507 338.318 667.507 341.131C667.507 343.917 667.91 346.352 668.714 348.435C669.543 350.519 670.712 352.12 672.22 353.24C673.754 354.334 675.551 354.881 677.612 354.881C680.729 354.881 683.205 353.67 685.04 351.248C686.9 348.8 687.83 345.428 687.83 341.131ZM715.656 325.349V326.638C717.466 324.164 719.439 322.354 721.575 321.209C723.737 320.037 726.213 319.451 729.003 319.451C731.718 319.451 734.143 320.063 736.28 321.287C738.417 322.511 740.013 324.242 741.068 326.482C741.747 327.784 742.187 329.19 742.388 330.701C742.589 332.211 742.69 334.138 742.69 336.482V356.326C742.69 358.461 742.212 360.076 741.257 361.17C740.327 362.264 739.108 362.81 737.6 362.81C736.067 362.81 734.822 362.25 733.867 361.131C732.912 360.011 732.434 358.409 732.434 356.326V338.552C732.434 335.037 731.957 332.354 731.001 330.506C730.071 328.631 728.199 327.693 725.383 327.693C723.549 327.693 721.877 328.266 720.369 329.412C718.861 330.532 717.755 332.081 717.051 334.06C716.548 335.649 716.297 338.618 716.297 342.966V356.326C716.297 358.487 715.807 360.115 714.826 361.209C713.871 362.276 712.627 362.81 711.094 362.81C709.61 362.81 708.391 362.25 707.436 361.131C706.481 360.011 706.003 358.409 706.003 356.326V325.506C706.003 323.474 706.431 321.964 707.285 320.974C708.14 319.959 709.309 319.451 710.792 319.451C711.697 319.451 712.514 319.672 713.243 320.115C713.972 320.558 714.55 321.222 714.977 322.107C715.43 322.992 715.656 324.073 715.656 325.349ZM778.66 356.795V355.428C777.428 357.042 776.134 358.396 774.776 359.49C773.419 360.584 771.936 361.391 770.327 361.912C768.718 362.459 766.883 362.732 764.822 362.732C762.334 362.732 760.097 362.198 758.111 361.131C756.15 360.063 754.63 358.592 753.549 356.716C752.267 354.451 751.626 351.196 751.626 346.951V325.818C751.626 323.683 752.091 322.094 753.021 321.052C753.951 319.985 755.182 319.451 756.716 319.451C758.274 319.451 759.531 319.985 760.486 321.052C761.441 322.12 761.919 323.709 761.919 325.818V342.888C761.919 345.362 762.12 347.446 762.522 349.138C762.924 350.805 763.641 352.12 764.671 353.084C765.727 354.021 767.147 354.49 768.932 354.49C770.667 354.49 772.3 353.956 773.834 352.888C775.367 351.821 776.485 350.428 777.189 348.709C777.767 347.198 778.057 343.891 778.057 338.787V325.818C778.057 323.709 778.534 322.12 779.489 321.052C780.445 319.985 781.689 319.451 783.222 319.451C784.755 319.451 785.987 319.985 786.917 321.052C787.847 322.094 788.312 323.683 788.312 325.818V356.716C788.312 358.748 787.86 360.271 786.955 361.287C786.075 362.302 784.931 362.81 783.524 362.81C782.116 362.81 780.947 362.29 780.017 361.248C779.112 360.18 778.66 358.696 778.66 356.795ZM835.517 349.607C835.517 350.935 835.127 352.354 834.351 353.865C833.594 355.376 832.428 356.821 830.841 358.201C829.285 359.555 827.312 360.649 824.922 361.482C822.536 362.316 819.845 362.732 816.853 362.732C810.494 362.732 805.529 360.818 801.961 356.99C798.392 353.136 796.607 347.98 796.607 341.521C796.607 337.146 797.424 333.279 799.058 329.92C800.691 326.56 803.054 323.969 806.147 322.146C809.239 320.297 812.934 319.373 817.231 319.373C819.895 319.373 822.336 319.776 824.548 320.584C826.783 321.391 828.667 322.433 830.2 323.709C831.76 324.985 832.942 326.352 833.745 327.81C834.575 329.242 834.992 330.584 834.992 331.834C834.992 333.11 834.524 334.19 833.594 335.076C832.691 335.961 831.582 336.404 830.277 336.404C829.424 336.404 828.706 336.183 828.127 335.74C827.575 335.271 826.945 334.529 826.243 333.514C824.984 331.534 823.668 330.05 822.285 329.06C820.926 328.071 819.193 327.576 817.081 327.576C814.038 327.576 811.587 328.813 809.73 331.287C807.869 333.735 806.938 337.094 806.938 341.365C806.938 343.37 807.178 345.219 807.656 346.912C808.131 348.578 808.822 350.011 809.73 351.209C810.633 352.381 811.726 353.279 813.008 353.904C814.289 354.503 815.699 354.802 817.231 354.802C819.293 354.802 821.054 354.308 822.509 353.318C823.992 352.328 825.301 350.818 826.432 348.787C827.061 347.589 827.737 346.652 828.467 345.974C829.196 345.297 830.088 344.959 831.146 344.959C832.401 344.959 833.443 345.454 834.274 346.443C835.104 347.433 835.517 348.487 835.517 349.607ZM842.567 356.326V310.076C842.567 307.941 843.022 306.326 843.926 305.232C844.856 304.138 846.1 303.592 847.659 303.592C849.219 303.592 850.474 304.138 851.428 305.232C852.385 306.3 852.864 307.914 852.864 310.076V356.326C852.864 358.487 852.374 360.115 851.393 361.209C850.435 362.276 849.192 362.81 847.659 362.81C846.15 362.81 844.918 362.25 843.964 361.131C843.034 360.011 842.567 358.409 842.567 356.326ZM892.265 343.748H872.13C872.153 346.17 872.62 348.305 873.524 350.154C874.454 352.003 875.674 353.396 877.18 354.334C878.713 355.271 880.4 355.74 882.234 355.74C883.466 355.74 884.585 355.597 885.589 355.31C886.62 354.998 887.612 354.529 888.57 353.904C889.523 353.253 890.404 352.563 891.207 351.834C892.01 351.104 893.056 350.115 894.338 348.865C894.863 348.396 895.62 348.162 896.6 348.162C897.655 348.162 898.508 348.461 899.164 349.06C899.817 349.659 900.145 350.506 900.145 351.599C900.145 352.563 899.778 353.696 899.048 354.998C898.322 356.274 897.214 357.511 895.732 358.709C894.272 359.881 892.427 360.857 890.188 361.638C887.979 362.42 885.427 362.81 882.535 362.81C875.925 362.81 870.782 360.857 867.115 356.951C863.443 353.045 861.609 347.745 861.609 341.052C861.609 337.902 862.061 334.985 862.968 332.302C863.871 329.594 865.192 327.276 866.925 325.349C868.659 323.422 870.798 321.951 873.335 320.935C875.875 319.894 878.69 319.373 881.782 319.373C885.801 319.373 889.245 320.258 892.114 322.029C895.002 323.774 897.164 326.04 898.597 328.826C900.029 331.612 900.747 334.451 900.747 337.342C900.747 340.024 900.006 341.769 898.523 342.576C897.041 343.357 894.952 343.748 892.265 343.748ZM872.13 337.693H890.794C890.543 334.047 889.585 331.326 887.929 329.529C886.292 327.706 884.13 326.795 881.443 326.795C878.879 326.795 876.767 327.719 875.107 329.568C873.474 331.391 872.481 334.099 872.13 337.693ZM912.434 362.81C910.878 362.81 909.531 362.29 908.4 361.248C907.268 360.206 906.705 358.748 906.705 356.873C906.705 355.284 907.245 353.917 908.326 352.771C909.407 351.626 910.739 351.052 912.322 351.052C913.905 351.052 915.249 351.626 916.357 352.771C917.488 353.891 918.052 355.258 918.052 356.873C918.052 358.722 917.488 360.18 916.357 361.248C915.249 362.29 913.944 362.81 912.434 362.81ZM940.109 325.506V356.326C940.109 358.461 939.619 360.076 938.638 361.17C937.658 362.264 936.414 362.81 934.909 362.81C933.399 362.81 932.167 362.25 931.21 361.131C930.283 360.011 929.816 358.409 929.816 356.326V325.818C929.816 323.709 930.283 322.12 931.21 321.052C932.167 319.985 933.399 319.451 934.909 319.451C936.414 319.451 937.658 319.985 938.638 321.052C939.619 322.12 940.109 323.604 940.109 325.506ZM935.021 314.49C933.588 314.49 932.357 314.034 931.326 313.123C930.318 312.211 929.816 310.922 929.816 309.256C929.816 307.745 930.333 306.508 931.364 305.545C932.418 304.555 933.638 304.06 935.021 304.06C936.353 304.06 937.534 304.503 938.565 305.388C939.596 306.274 940.109 307.563 940.109 309.256C940.109 310.896 939.607 312.185 938.604 313.123C937.596 314.034 936.403 314.49 935.021 314.49ZM989.313 341.131C989.313 344.308 988.838 347.237 987.881 349.92C986.927 352.602 985.545 354.907 983.734 356.834C981.923 358.761 979.761 360.245 977.248 361.287C974.734 362.302 971.908 362.81 968.765 362.81C965.649 362.81 962.846 362.29 960.356 361.248C957.87 360.206 955.707 358.722 953.874 356.795C952.063 354.842 950.681 352.55 949.723 349.92C948.796 347.264 948.329 344.334 948.329 341.131C948.329 337.902 948.808 334.946 949.762 332.264C950.719 329.581 952.086 327.29 953.874 325.388C955.657 323.487 957.819 322.029 960.356 321.014C962.897 319.972 965.7 319.451 968.765 319.451C971.881 319.451 974.711 319.972 977.248 321.014C979.788 322.055 981.962 323.54 983.772 325.466C985.583 327.394 986.95 329.685 987.881 332.342C988.838 334.998 989.313 337.928 989.313 341.131ZM978.985 341.131C978.985 336.782 978.054 333.396 976.193 330.974C974.36 328.552 971.881 327.342 968.765 327.342C966.754 327.342 964.981 327.888 963.449 328.982C961.916 330.05 960.734 331.638 959.904 333.748C959.074 335.857 958.661 338.318 958.661 341.131C958.661 343.917 959.063 346.352 959.866 348.435C960.696 350.519 961.866 352.12 963.375 353.24C964.908 354.334 966.703 354.881 968.765 354.881C971.881 354.881 974.36 353.67 976.193 351.248C978.054 348.8 978.985 345.428 978.985 341.131Z" fill="#3A3A3B"/>
        <path d="M451.239 381.202C451.239 381.202 487.829 386.198 519.492 378.462C517.472 372.84 514.746 367.518 511.384 362.634L478.118 351.658C461.123 369.106 451.239 381.202 451.239 381.202Z" fill="#117C3F"/>
        <path d="M521.338 378.014C516.724 367.214 504.674 337.67 501.187 329.114C491.261 338.35 482.566 347.026 475.319 354.558L511.739 380.114C514.963 379.522 518.179 378.834 521.338 378.014Z" fill="#40883C"/>
        <path d="M554.26 359.982L509.454 321.558C505.706 324.923 502.102 328.232 498.643 331.486L511.732 380.106C528.175 377.146 544.179 371.218 554.26 359.982Z" fill="#5E9640"/>
        <path d="M529.5 312.19L554.264 359.97C555.454 358.663 556.56 357.278 557.576 355.822C569.352 338.69 572.282 315.222 572.564 297.722L529.5 312.19Z" fill="#79A73F"/>
        <path d="M571.317 273.51C571.317 273.51 534.731 263.722 500.056 270.238L500.373 271.654C500.373 271.654 503.882 276.918 504.106 277.07L541.36 292.21C547.457 288.078 552.742 284.662 557.051 281.958C562.229 278.674 567.599 275.41 571.337 273.526L571.317 273.51Z" fill="#7CC145"/>
        <path d="M481.269 275.698L513.315 312.15C523.789 304.254 533.326 297.602 541.414 292.234L502.658 269.778C495.34 270.932 488.168 272.917 481.269 275.698Z" fill="#70B944"/>
        <path d="M502.655 269.778C488.591 271.662 475.217 277.205 463.779 285.89C461.096 288.075 458.588 290.483 456.281 293.09C456.281 293.09 490.516 317.762 491.261 318.534C493.616 320.393 496.101 322.067 498.697 323.542C503.84 319.406 508.832 315.542 513.631 311.914L502.655 269.778Z" fill="#8CC63E"/>
        <path d="M436.791 342.582L464.682 353.138C470.288 347.858 475.837 342.836 481.327 338.074C481.308 338.007 481.284 337.942 481.257 337.878C479.763 334.786 469.312 322.25 466.173 317.298C462.43 309.432 459.128 301.35 456.285 293.09C443.443 307.53 438.405 326.218 436.791 342.582Z" fill="#71B944"/>
        <path d="M471.848 346.502L437.59 336.162C435.488 350.698 435.657 365.49 438.092 379.97C449.316 367.79 460.694 356.63 471.848 346.502Z" fill="#19A248"/>
        <path d="M456.254 293.122L456.227 293.154L471.744 346.354V346.594C486.416 333.242 500.658 321.694 513.504 312.022L456.254 293.122Z" fill="#60B446"/>
        <path d="M545.032 314.826L571.032 317.722C573.005 303.063 573.102 288.199 571.321 273.514L571.07 273.45C569.846 274.182 568.622 274.934 567.41 275.686C568.723 274.926 569.452 274.518 569.452 274.518C559.541 281.146 550.04 288.094 541.009 295.122L545.032 314.826Z" fill="#26813E"/>
        <path d="M554.167 360.086C554.198 360.046 554.237 360.014 554.268 359.982L541.017 295.114C525.249 307.39 510.959 319.914 498.659 331.482L554.167 360.086Z" fill="#4E9040"/>
        <path d="M413 408.438C429.396 388.873 446.795 370.235 465.123 352.606L457.327 348.246C439.366 365.574 413 408.438 413 408.438Z" fill="#19A248"/>
        </g>
        <defs>
        <clipPath id="clip0_95_10">
        <rect width="583" height="144" fill="white" transform="translate(413 268)"/>
        </clipPath>
        </defs>
        </svg>

    </div>
  );
}
