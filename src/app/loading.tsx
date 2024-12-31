import styles from "@/components/styles";

export default function Loading() {
  return (
    <div
      className={`${styles.flex.center} w-8 text-2xl m-auto py-10 animate-ping`}
    >
      Processing...
    </div>
  );
}
