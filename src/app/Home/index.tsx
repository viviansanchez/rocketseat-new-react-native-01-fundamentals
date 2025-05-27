import { Image, View, TouchableOpacity, Text } from "react-native";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { Item } from "@/components/Item";

import { FilterStatus } from "@/types/filterStatus";

import { styles } from "./styles";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter status={status} isActive={true} key={status} />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <Item
          data={{ status: FilterStatus.DONE, description: "Café" }}
          onStatus={() => console.log("mudar status")}
          onRemove={() => console.log("remover")}
        />
      </View>
    </View>
  );
}
