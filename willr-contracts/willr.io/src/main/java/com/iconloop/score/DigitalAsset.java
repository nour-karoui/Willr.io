package com.iconloop.score;
public class DigitalAsset {
    private String name;
    private String value;
    public DigitalAsset(String name, String value) {
        this.name = name;
        this.value = value;
    }

  public String getName() {
    return this.name;
  }

  public String getValue() {
    return this.value;
  }
}